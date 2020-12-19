import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(
      {
        usager: ['', Validators.required], nom: ['', Validators.required], password: ['', Validators.required],
          numero: [0], option: ['', Validators.required]
      }

  );

   }
   
  ngOnInit(): void {
  }

  roles: any[] = [
    { name: 'SOUS-ADMIN' },
    { name: 'AGENT' },
    { name: 'ADMIN' },
    
];

enregistrerItem() {
 
 /* this.item = new ItemTypeType();
  this.item.id = this.itemTypeForm.controls['id'].value;
  this.item.nom = this.itemTypeForm.controls['nom'].value;
  this.item.statut = this.itemTypeForm.controls['etat'].value;
  this.item.delaiDeRetention = Number(this.itemTypeForm.controls['delaiRention'].value);
  this.item.delaiNouvelItem = Number(this.itemTypeForm.controls['delaiNouvelItem'].value);
  this.item.titre = this.itemTypeForm.controls['titre'].value;
  this.item.description = this.itemTypeForm.controls['description'].value;
  this.item.champA = this.itemTypeForm.controls['champ0'].value;
  this.item.champB = this.itemTypeForm.controls['champ1'].value;
 

  this.item.enabled = this.isEnabled(this.etatSelected);
  this.item.itemCleGenerateur = this.itemTypeForm.controls['cleUnique'].value;

  this.entite = new ViewModel<ItemType>(this.item);
  this.entite.isNew = true;
  this.entite.changes = this.entite.value;
  if (this.editItem !== undefined) {
      this.editItem.changes = this.item;
      this.editItem.changes.idAuto = this.editItem.value.idAuto;
      return this.service.save(this.editItem, this.itemTypeForm.value);

  }

  return this.service.save(this.entite, this.itemTypeForm.value);*/

}
  
}
