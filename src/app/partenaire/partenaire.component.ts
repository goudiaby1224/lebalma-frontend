import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Partenaire } from './partenaire.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  //@ViewChild('raisonSocialInput', { static: false }) raisonSocialInputRef: ElementRef;
  //@ViewChild('adresseInput', { static: false }) adresseInputRef: ElementRef;
  partenaireCreated = new EventEmitter<Partenaire>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreate(partenaire: any): void {
      this.partenaireCreated.emit(partenaire);
      this.http.post('http://localhost:8881/users', partenaire).subscribe(responseData => {
        console.log(responseData);
      });
  }

  getPartenaire(idPartenaire: string): void {
    this.http.get<{ [key: string]: Partenaire }>('http://localhost:8881/partenaires/id')
      .pipe(
        map(responseDataResponse  => {
         console.log(responseDataResponse);
         const postArray: Partenaire[] = [];
         for (const key in responseDataResponse) {
           if (responseDataResponse.hasOwnProperty(key)){
             //postArray.push(responseDataResponse[key], id: key );
           }
         }
         return postArray;
      })
      )
      .subscribe(responseData => {
       console.log(responseData);
      });
  }

}
