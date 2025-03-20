import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Input Event Binding with Validation";
  userInput: string = "";
  validationMessage: string = "";

  onInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.userInput = input;

    if (this.userInput.length < 3) {
      this.validationMessage = "Input must be at least 3 characters long.";
    } else {
      this.validationMessage = "";
    }
  }
}