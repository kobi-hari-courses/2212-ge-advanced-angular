import { outputAst } from "@angular/compiler";
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]', 
    exportAs: 'highlight'
})
export class HighlightDirective implements OnInit {

    private _color: string = 'yellow';
    private _clickCount = 0;

    @Input('highlight')
    get color(): string {return this._color}
    set color(value: string) {
        this._color = value;
        this.bg = this._color;
    }



    @Output()
    dismissed = new EventEmitter<string>();

    @HostBinding('style.background-color')
    bg: string = '';

    @HostListener('click')
    onClick() {
        this._clickCount++;
        if (this._clickCount > 3) {
            this.dismissed.emit(this.bg);
            this.bg = '';
        }
    }

    @HostListener('mousemove', ['42', '$event'])
    whenMouseMove(stam: number, ev: MouseEvent) {
        console.log(stam);
        console.log(ev.offsetX, ev.offsetY);
    }


    constructor(
        private elem: ElementRef<any>,
        renderer: Renderer2

    ) {
        console.log(elem.nativeElement,);
        // elem.nativeElement.style.backgroundColor = 'yellow'

        //renderer.setStyle(elem.nativeElement, 'background-color', 'lime');
    }

    ngOnInit(): void {
        this.bg = this.color || 'yellow';
    }
}