import { effect, Injectable, Signal, signal } from '@angular/core';
import { Solde } from '../models/solde.module';
import { Virement } from '../models/virement.module';

@Injectable({
  providedIn: 'root',
})
export class SoldeService {
  private soldeState = signal<Solde>({
    id: "FR76 12345 67890 12345678901", // ceci est considerer comme le id du user
    fullName: 'Mohamed Amine',
    solde: 4500,
    email: 'amine339@outlook.fr',
    virements: [
      {
        id: 1,
        montant: 500,
        motif: 'Payement Scolaire',
        beneficier: '2457895182485a',
        dateVirement: '01-04-2025',
      },
      {
        id: 2,
        montant: 1500,
        motif: 'Payement Scolaire',
        beneficier: '2457895182485a',
        dateVirement: '01-04-2025',
      },
      {
        id: 3,
        montant: 300,
        motif: 'Payement Scolaire',
        beneficier: '2457895182485a',
        dateVirement: '01-04-2025',
      },
      {
        id: 4,
        montant: 700,
        motif: 'Payement Scolaire',
        beneficier: '2457895182485a',
        dateVirement: '01-04-2025',
      },
      {
        id: 5,
        montant: 900,
        motif: 'Payement Scolaire',
        beneficier: '2457895182485a',
        dateVirement: '01-04-2025',
      },
    ],
  });

  constructor() {}

  public getSolde(): Solde  {
    return this.soldeState();
  }

  public addSolde(virement:Virement){

    if(virement.montant > this.getSolde().solde){
      console.log("Ce montant est superieur a ce que vous avez dans le compte")
      return;
    }

    this.getSolde().solde -= virement.montant; 
    virement.id = this.getSolde().virements.length >0?
    this.getSolde().virements[this.getSolde().virements.length - 1].id + 1 :
    1;
    this.getSolde().virements.push(virement);
  }


}
