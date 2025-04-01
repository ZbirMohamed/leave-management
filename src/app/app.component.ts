import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalenderFrameComponent } from "./components/calender-frame/calender-frame.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leave-project';
}
