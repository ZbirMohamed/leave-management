import { Virement } from "./virement.module";

export interface Solde{

    id:string; // compte
    fullName:string;
    email:string;
    solde:number;
    virements:Virement[];

}