import { ComponentRef, Directive, ElementRef, EmbeddedViewRef, Input, OnInit, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { BlankComponent } from '../components/blank/blank.component';

@Directive({
    selector: '[appStam]'
})
export class StamDirective implements OnInit {

    @Input()
    template!: TemplateRef<any>;

    constructor(
        private elem: ElementRef<any>, 
        private vref: ViewContainerRef    
    ) {
        console.log('Element Ref = ', elem);

    }

    ngOnInit(): void {
        console.log('View Container Ref', this.vref);
        console.log('Template', this.template);
        const v1: EmbeddedViewRef<any> =  this.vref.createEmbeddedView(this.template);
        const v2: ComponentRef<BlankComponent> = this.vref.createComponent(BlankComponent);
        console.log('v1', v1);
        console.log('v2', v2);

        setTimeout(() => v2.instance.x = 242 , 5000);
        
    }

}
