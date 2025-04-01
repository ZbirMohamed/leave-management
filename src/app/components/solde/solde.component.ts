import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SoldeService } from '../../services/solde.service';
import { Router } from '@angular/router';
import { Virement } from '../../models/virement.module';
import moment from 'moment';

@Component({
  selector: 'app-solde',
  imports: [ReactiveFormsModule],
  templateUrl: './solde.component.html',
  styleUrl: './solde.component.css'
})
export class SoldeComponent implements OnInit {
  
  soldeForm! : FormGroup;

  constructor(private fb: FormBuilder, private soldeService: SoldeService,private router:Router){}

  ngOnInit(): void {
    this.soldeForm = this.fb.group({
      beneficier: this.fb.control(''),
      montant: this.fb.control(0),
      motif: this.fb.control(''),
    });
  }


  onSubmit():void{
    let virement: Virement = {
      id:0,
      beneficier: this.soldeForm.value.beneficier,
      montant: parseInt(this.soldeForm.value.montant),
      motif: this.soldeForm.value.motif,
      dateVirement: moment().format("DD-MM-YYYY")
    }
    console.log(virement);
    this.soldeService.addSolde(virement);
    this.router.navigateByUrl("");
  }

}
