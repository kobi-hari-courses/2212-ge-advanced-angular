import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseFollow]', 
  exportAs: 'mouseFollow'
})
export class MouseFollowDirective {
    public x: string = '0px';
    public y: string = '0px';


    @HostListener('mousemove', ['$event'])
    whenMouseMoves(ev: MouseEvent) {
        this.x = `${ev.offsetX}px`;
        this.y = `${ev.offsetY}px`;
    }


  constructor() { }

}
