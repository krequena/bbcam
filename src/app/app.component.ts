import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bbcam';

  loggedUser = null;
  secToken = null;

  login(event) {
    // Improper handling, must be reimplemented!
    this.loggedUser = event[0];
    this.secToken = event[1];
  }

  logout(event) {
    this.loggedUser = null;
    this.secToken = null;
  }
}
