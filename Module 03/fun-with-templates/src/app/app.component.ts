import { AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { StamDirective } from './directives/stam.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = 5;
    startWith = 3;

    colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta'];
}


