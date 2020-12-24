export class Partenaire {
  public id?: number;
  public raisonSocial: string;
  public adresse: string;
  public telephone: string;
  public responsable: string;
  public mail: string;
  public dateMiseEnService: string;
  public type: string;

  constructor(id: number, raisonsocial: string, adresse: string, telephone: string,responsable: string, mail: string, dateMiseEnService: string
          ,   type: string) {
    this.id = id;
    this.raisonSocial = raisonsocial;
    this.adresse = adresse;
    this.telephone = telephone;
    this.responsable = responsable
    this.mail = mail;
    this.dateMiseEnService = dateMiseEnService;
    this.type = type;
  }
}
