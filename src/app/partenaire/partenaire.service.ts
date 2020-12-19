import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Partenaire} from './partenaire.model';
import {Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePartenaire(raisonsocial: string, adresse: string, telephone: string, mail: string, dateMiseEnService: string, type: string){
    const postData: Partenaire = { raisonsocial, adresse, telephone, mail, dateMiseEnService, type};
    this.http.post(
      'http://localhost:8881/', postData,
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
  fetchPartenaire(id: string){
    this.http.get<{ [key: string]: Partenaire }>('http://localhost:8881/partenaires/{id}')
      .pipe(
        map(responseDataResponse  => {
          console.log(responseDataResponse);
          const postArray: Partenaire[] = [];
          for (const key in responseDataResponse) {
            if (responseDataResponse.hasOwnProperty(key)){
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
  deletePartenaire(id: string){
    return this.http.delete('http://localhost:8881/partenaires/{id}', {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent){
          //
        }
        if (event.type === HttpEventType.Response) {
           console.log(event.body);
        }
      }
    ));
  }
}
