import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appIsAlive]'
})
export class IsAliveDirective {

    constructor(private elem: ElementRef<any>) {
        console.log('I AM ALIVE!!!!');
        console.log(elem);
    }

}
