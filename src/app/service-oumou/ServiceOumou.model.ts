
export class ServiceOumou{

    public id?:number;
    public nom: string;
    public responsable: string;

    constructor(id: number,nom: string,responsable: string){
        this.id=id;
        this.nom=nom;
        this.responsable = responsable
    }
}