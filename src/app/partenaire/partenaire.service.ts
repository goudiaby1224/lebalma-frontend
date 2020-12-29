import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Partenaire} from './partenaire.model';
import {Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  BASE_URI = 'http://localhost:8881/lebalma/partenaires/';
  //BASE_URI = 'http://ec2-18-223-106-114.us-east-2.compute.amazonaws.com:8881/lebalma/partenaires/';
  
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  createAndStorePartenaire(raisonSocial: string, adresse: string, telephone: string,responsable: string, mail: string, dateMiseEnService: string, type: string){
    const postData: Partenaire = { raisonSocial, adresse, telephone,responsable, mail, dateMiseEnService, type};
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
  fetchPartenaire(id: string){
    this.http.get<{ [key: string]: Partenaire }>(this.BASE_URI + '/' + id)
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
    return this.http.delete(this.BASE_URI + '/' + id, {
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
  fetchAllPartenaire() {
    return this.http.get<Partenaire[]>(this.BASE_URI ).toPromise() ;
  }
  updatePartenaire(partenaire: Partenaire) {
    this.http.put<Partenaire>(this.BASE_URI,partenaire).subscribe(resp=>{console.log(resp)})
  }
}
