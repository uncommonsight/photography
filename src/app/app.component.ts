import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uncommonsight';

  nav: boolean = false;
  
  onClick() {
    this.nav = !this.nav;
  }
}
