import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';
import { SelectorItemContext } from './selector-item-context';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.scss']
})
export class StringSelectorComponent {
    @Input()
    options: string[] = [];

    @Input()
    selected: string = '';

    @ContentChild(ItemTemplateDirective)
    itemTemplateDirective: ItemTemplateDirective | null = null;

    @Output()
    selection = new EventEmitter<string>();

    onSelect(value: string) {
        this.selection.emit(value);
    }

}
