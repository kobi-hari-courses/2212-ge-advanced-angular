import { Directive, TemplateRef } from '@angular/core';
import { SelectorItemContext } from './selector-item-context';

@Directive({
  selector: '[itemTemplate]'
})
export class ItemTemplateDirective {

  constructor(
    public template: TemplateRef<SelectorItemContext>
  ) { }

}
