import { Component, computed } from '@angular/core';
import { SoldeService } from '../../services/solde.service';

@Component({
  selector: 'app-calender-frame',
  imports: [],
  templateUrl: './calender-frame.component.html',
  styleUrl: './calender-frame.component.css'
})
export class CalenderFrameComponent {
  
constructor(private soldeService: SoldeService){}

  private date: Date = new Date();
  

  public getDate(){
    return this.date.toString();
  }

  public data(){
    return this.soldeService.getSolde();
  }
 

}
