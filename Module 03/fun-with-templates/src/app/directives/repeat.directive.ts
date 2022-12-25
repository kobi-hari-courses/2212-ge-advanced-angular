import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface RepeatContext {
    $implicit: number;
    middle: boolean;
}

@Directive({
    selector: '[myRepeat]'
})
export class RepeatDirective {

    private _count: number = 0;
    private _startWith: number = 1;
    private _skip: number = 1;

    @Input('myRepeat')
    get count(): number { return this._count;}
    set count(value: number) {
        console.log('does it work?');
        this._count = value;
        this.invalidate();
    }

    @Input('myRepeatStartWith')
    get startWith(): number { return this._startWith;}
    set startWith(value: number) {
        this._startWith = value;
        this.invalidate();
    }

    @Input('myRepeatSkip')
    get skip(): number { return this._skip;}
    set skip(value: number) {
        this._skip = value;
        this.invalidate();
    }


    constructor(
        private template: TemplateRef<RepeatContext>,
        private vcRef: ViewContainerRef
    ) { }

    invalidate() {
        while (this.vcRef.length > this.count) {
            this.vcRef.remove(this.vcRef.length - 1);
        }

        while (this.vcRef.length < this.count) {
            this.vcRef.createEmbeddedView(this.template, {
                $implicit: this.vcRef.length + 1, 
                middle: false
            });
        }

        const middle = Math.floor(this.count / 2);
        for (let i = 0; i < this.count; i++) {
            const view = this.vcRef.get(i) as EmbeddedViewRef<RepeatContext>;
            const context = view.context;
            context.$implicit = this.startWith + i * this.skip;
            context.middle = (i === middle);
        }
    }

}
