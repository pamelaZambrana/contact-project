export class Contact{
    name= " ";
    lastName= " ";
    cellphone="";
    email=" ";
    conection=false;


    constructor (name, lastName,cellphone, email, conection){
        this.name= name;
        this.lastName=lastName;
        this.cellphone=cellphone;
        this.email=email;
        this.conection=conection;
    }
}