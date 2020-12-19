import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Partenaire } from './partenaire.model';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {PartenaireService} from './partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  loadedPartenaire: Partenaire[] = [];
  isFetching = false;
  error: string | undefined;
  private errorSub: Subscription | undefined;

  constructor(private http: HttpClient, private partenaireService: PartenaireService) { }

  ngOnInit(): void {
    this.errorSub = this.partenaireService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
  }

  onCreate(partenaire: Partenaire): void {
      this.http.post('http://localhost:8881/users', partenaire).subscribe(responseData => {
        console.log(responseData);
      });
    // tslint:disable-next-line:max-line-length
      this.partenaireService.createAndStorePartenaire(partenaire.raisonsocial, partenaire.adresse, partenaire.telephone, partenaire.mail, partenaire.dateMiseEnService, partenaire.type);
  }

  onFetchPartenaire(id: string): void {
    this.isFetching = true;
    this.partenaireService.fetchPartenaire(id);
  }

}
