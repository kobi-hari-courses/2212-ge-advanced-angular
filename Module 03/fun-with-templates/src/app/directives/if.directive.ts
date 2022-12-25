import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[myIf]'
})
export class IfDirective implements OnChanges {
    @Input()
    condition: boolean = true;


    constructor(
        private template: TemplateRef<any>, 
        private vcRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if ((this.condition === true) && (this.vcRef.length === 0)) {
            this.vcRef.createEmbeddedView(this.template);
            return;
        }

        if ((this.condition === false) && (this.vcRef.length > 0)) {
            this.vcRef.clear();
            return;
        }        
    }

}
