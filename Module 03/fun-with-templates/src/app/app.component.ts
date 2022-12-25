import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    showMessage:boolean = true;

    toggleMessage() {
        this.showMessage = !this.showMessage;
    }
}
