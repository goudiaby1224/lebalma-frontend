export class Personnel {
  public id: number;
  public nom: string;
  public prenom: string;
  public adresse: string;
  public metier: string;
  public service: string;
  public nomUtilisateur: string;
  public mail: string;
  public tel: string;
  public login: string;
  public password: string;
  public numero: number;
  public role: string;

  constructor(id: number, nom: string, prenom: string, adresse: string, metier: string, service: string, nomUtilisateur: string, mail: string, login: string, password: string,
              numero: number, role: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.metier = metier;
    this.service = service;
    this.nomUtilisateur = service;
    this.mail = mail;
    this.tel = service;
    this.login = login;
    this.password = password;
    this.numero = numero;
    this.role = nom;
  }
}
