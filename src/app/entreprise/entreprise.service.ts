import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Entreprise} from './entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  BASE_URI = 'http://localhost:8881/lebalma/entreprise/';
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  createAndStoreEntreprise(raisonsocial: string, adresse: string, telephone: string, mail: string, dateMiseEnService: string, type: string) {
    const postData: Entreprise = {raisonsocial, adresse, telephone, mail, dateMiseEnService, type};
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
  fetchEntreprise(id: string) {
    this.http.get<{ [key: string]: Entreprise }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: Entreprise[] = [];
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
  deleteEntreprise(id: string) {
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
