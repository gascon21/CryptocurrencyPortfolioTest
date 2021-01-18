export class Currency {
    public id:number;
    public name:string;
    public acronym:string;
    public isEdit: boolean = false;
    
    constructor(
            name:string,
            acronym:string,
            id?:number) {
        if(id) {
            this.id = id;
        } else {
            this.id = 0;
        }
        this.name = name;
        this.acronym = acronym;
    }
}
