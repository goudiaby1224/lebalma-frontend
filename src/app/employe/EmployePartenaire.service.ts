import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {map, tap} from 'rxjs/operators';
import { Partenaire } from "../partenaire/partenaire.model";
import { EmployePartenaire } from "./EmployePartenaire.model";

@Injectable({
    providedIn: 'root'
  })
export class EmployePartenaireService{

    BASE_URI = 'http://localhost:8881/lebalma/employes';
    error = new Subject<string>();
  
    constructor(private http: HttpClient) { }
  
    // tslint:disable-next-line:typedef
    createAndStoreEmployePartenaire(nom: string, prenom: string, adresse: string, metier: string, service: string,
        nomUtilisateur: string, mail: string, tel: string, role: string,
        partenaire:Partenaire){
      const postData: EmployePartenaire = { nom, prenom, adresse, metier, service,
        nomUtilisateur, mail, tel, role,
        partenaire};
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
    fetchEmployePartenaire(id: string){
      this.http.get<{ [key: string]: EmployePartenaire }>(this.BASE_URI + '/' + id)
        .pipe(
          map(responseDataResponse  => {
            console.log(responseDataResponse);
            const postArray: EmployePartenaire[] = [];
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
    fetchAllEmployePartenaire() {
      return this.http.get<EmployePartenaire[]>(this.BASE_URI ).toPromise() ;
    }
    updateEmployePartenaire(employePartenaire: EmployePartenaire) {
      this.http.put<EmployePartenaire>(this.BASE_URI,employePartenaire).subscribe(resp=>{console.log(resp)})
    }

}