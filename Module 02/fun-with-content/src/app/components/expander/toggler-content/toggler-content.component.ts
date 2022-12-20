import { Component, Input, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: 'button[expanderToggle]',
  templateUrl: './toggler-content.component.html',
  styleUrls: ['./toggler-content.component.css']
})
export class TogglerContentComponent {

    constructor(
        @Optional() protected expander: ExpanderComponent | null
    ){}
}
