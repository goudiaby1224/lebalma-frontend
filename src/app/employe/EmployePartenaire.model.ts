import { Partenaire } from "../partenaire/partenaire.model";

export class EmployePartenaire{

    public id?: number;
  public nom: string;
  public prenom: string;
  public adresse: string;
  public metier: string;
  public service: string;
  public nomUtilisateur: string;
  public mail: string;
  public tel: string;
  public role: string;
  public partenaire?: Partenaire;

  constructor(id: number, nom: string, prenom: string, adresse: string, metier: string, service: string,
     nomUtilisateur: string, mail: string, tel: string, role: string, partenaire:Partenaire) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.metier = metier;
    this.service = service;
    this.nomUtilisateur = nomUtilisateur;
    this.mail = mail;
    this.tel = tel;
    this.role = role;
    this.partenaire= partenaire
  }
}