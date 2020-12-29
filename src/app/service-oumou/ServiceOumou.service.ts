import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ServiceOumou } from "./ServiceOumou.model";
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class ServiceOumouService{

    BASE_URI = 'http://localhost:8881/lebalma/serviceoumous/';
    
    //BASE_URI = 'http://ec2-18-223-106-114.us-east-2.compute.amazonaws.com:8881/lebalma/serviceoumous/';
    error = new Subject<string>();
  
    constructor(private http: HttpClient) { }
  
    // tslint:disable-next-line:typedef
    createAndStoreServiceOumou(nom: string, responsable: string){
      const postData: ServiceOumou = { nom, responsable};
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
    fetchServiceOumou(id: string){
      this.http.get<{ [key: string]: ServiceOumou }>(this.BASE_URI + '/' + id)
        .pipe(
          map(responseDataResponse  => {
            console.log(responseDataResponse);
            const postArray: ServiceOumou[] = [];
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
    deleteServiceOumou(id: string){
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
    fetchAllServiceOumou() {
      return this.http.get<ServiceOumou[]>(this.BASE_URI ).toPromise() ;
    }
    updateServiceOumou(serviceOumou: ServiceOumou) {
      this.http.put<ServiceOumou>(this.BASE_URI,serviceOumou).subscribe(resp=>{console.log(resp)})
    }

}