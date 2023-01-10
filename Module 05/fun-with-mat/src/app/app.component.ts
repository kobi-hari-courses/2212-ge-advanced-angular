import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    currentTheme = 'green';

    toggleTheme() {
        if (this.currentTheme === 'green') {
            this.currentTheme = 'blue';
            return;
        }

        if (this.currentTheme === 'blue') {
            this.currentTheme = 'purple';
            return;
        }

        this.currentTheme = 'green';
    }
}
