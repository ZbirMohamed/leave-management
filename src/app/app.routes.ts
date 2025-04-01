import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { SoldeComponent } from './components/solde/solde.component';
import { CalenderFrameComponent } from './components/calender-frame/calender-frame.component';

export const routes: Routes = [
   
    
    {path:"",redirectTo:'dashboard',pathMatch:'full' },
    {
        path:"solde",
        component:SoldeComponent
    },
    {path:"dashboard",component:CalenderFrameComponent}

];
