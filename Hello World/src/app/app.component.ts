import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Welcome to BridgeLabz";
  imgUrl: string = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  userClickMessage: string = "";

  onButtonClick(): void {
    this.userClickMessage = "Button clicked! Event Binding works!";
  }
}