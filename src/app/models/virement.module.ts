export interface Virement{
    id:number;
    motif:string;
    beneficier:string; // card number
    montant:number;
    dateVirement:string; // string ou date (on tout cas je vais formater la date)
}