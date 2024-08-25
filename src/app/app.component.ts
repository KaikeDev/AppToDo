import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './module/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule],
  template:
  `

   <router-outlet />
   `,
})
export class AppComponent {

}
