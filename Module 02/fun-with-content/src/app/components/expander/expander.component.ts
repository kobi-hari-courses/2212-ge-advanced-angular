import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
    isOpen: boolean = true;
    doesToggleButtonExist = false;

    @ContentChild(ExpanderToggleDirective)
    set toggleDirective(value: ExpanderToggleDirective | null) {
        this.doesToggleButtonExist = Boolean(value);
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    constructor() {
        console.log('Exander created');
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        console.log('child toggle directive', this.toggleDirective);            
    }

}
