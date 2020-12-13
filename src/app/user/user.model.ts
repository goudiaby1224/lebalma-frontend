export class User {
  public id: number;
  public login: string;
  public password: string;
  public numero: number;
  public nom: string;
  public role: string;

  constructor(id: number, login: string, password: string, numero: number, nom: string, role: string) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.numero = numero;
    this.nom = nom;
    this.role = nom;
  }
}
