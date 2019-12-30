import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  // h3 {
  //   color:dodgerblue;
  // }
  // `]
})
export class AppComponent {
  title = 'my-first-app';
  userName = "";

  getButtonState():boolean
  {
    return this.userName ==="";
  }
  changeButtonState()
  {
    this.userName = "";
  }
}
