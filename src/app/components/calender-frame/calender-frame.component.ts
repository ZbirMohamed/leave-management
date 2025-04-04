import { Component, computed } from '@angular/core';
import { SoldeService } from '../../services/solde.service';
import { FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from '../../utils/custom-currency.pipe';
@Component({
  selector: 'app-calender-frame',
  imports: [FormsModule,CustomCurrencyPipe],
  templateUrl: './calender-frame.component.html',
  styleUrl: './calender-frame.component.css'
})
export class CalenderFrameComponent {
  
constructor(private soldeService: SoldeService){}

  private date: Date = new Date();
  
  public currency = "dh";

  public getDate(){
    return this.date.toString();
  }

  public data(){
    return this.soldeService.getSolde();
  }
 

}
