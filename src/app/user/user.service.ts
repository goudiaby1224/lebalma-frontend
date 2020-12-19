import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Personnel} from '../personnel/personnel.model';
import {map, tap} from 'rxjs/operators';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URI = 'http://localhost:8881/lebalma/personnel/';
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  createUser(nom: string, prenom: string, adresse: string, metier: string, service: string, nomUtilisateur: string, mail: string, tel: string, role: string) {
    const postData: Personnel = {nom, prenom, adresse, metier, service, nomUtilisateur, mail, tel, role};
    this.http.post(
      this.BASE_URI, postData,
      {
        observe: 'response'
      }
    )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  // tslint:disable-next-line:typedef
  fetchUser(id: string) {
    this.http.get<{ [key: string]: User }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: User[] = [];
          for (const key in responseDataResponse) {
            if (responseDataResponse.hasOwnProperty(key)) {
              // postArray.push(responseDataResponse[key], id: key );
            }
          }
          return postArray;
        })
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }


  // tslint:disable-next-line:typedef
  deletePersonnel(id: string) {
    return this.http.delete(this.BASE_URI + '/' + id, {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            //
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        }
      ));
  }

}
