export class Partenaire {
  public id: number;
  public raisonsocial: string;
  public adresse: string;
  public telephone: number;
  public mail: string;
  public dateMiseEnService: string;
  public type: string;

  constructor(id: number, raisonsocial: string, adresse: string, telephone: number, mail: string, dateMiseEnService: string
          ,   type: string) {
    this.id = id;
    this.raisonsocial = raisonsocial;
    this.adresse = adresse;
    this.telephone = telephone;
    this.mail = mail;
    this.dateMiseEnService = dateMiseEnService;
    this.type = type;
  }
}
