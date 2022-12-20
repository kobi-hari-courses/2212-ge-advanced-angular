import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[tooltip]'
})
export class ImageTooltipDirective {
    @Input()
    @HostBinding('title')
    src: string = '';

  constructor() { }

}
