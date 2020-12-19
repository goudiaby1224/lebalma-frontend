import { Component } from '@angular/core';
import {Partenaire} from './partenaire/partenaire.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lebalma-frontend';
  partenaireElements: Partenaire[] = [];
}
