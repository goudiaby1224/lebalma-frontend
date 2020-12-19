import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Personnel} from './personnel.model';
import {User} from '../user/user.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  BASE_URI = 'http://localhost:8881/lebalma/partenaire/';
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
  createPersonnel(nom: string, prenom: string, adresse: string, metier: string, service: string, mail: string, tel: string, role: string) {
    // @ts-ignore
    const postData: Personnel = {nom, prenom, adresse, service, nomUtilisateur, mail, tel: role};
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
  fetchPersonnel(id: string) {
    this.http.get<{ [key: string]: Personnel }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: Personnel[] = [];
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