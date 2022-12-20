import { Directive, HostListener, Optional } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'button[expanderToggle]'
})
export class ExpanderToggleDirective {

    @HostListener('click')
    onToggleClick() {
        this.expander?.toggle();
    }
  constructor(
    @Optional() private expander: ExpanderComponent | null
  ) { }

}
