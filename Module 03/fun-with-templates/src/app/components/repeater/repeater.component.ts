import { Component, Input, OnDestroy, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnDestroy {
    @Input()
    template: TemplateRef<any> | null = null;

    constructor() {
        console.log('App Repeater created');
    }

    ngOnDestroy(): void {
        console.log('App repeater destroyed');
    }

}
