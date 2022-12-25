import { AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    showMessage:boolean = true;

    @ViewChild(TemplateRef)
    myTemp1: any;

    @ViewChildren(TemplateRef)
    myTemps1: QueryList<TemplateRef<any>> | null = null;

    myTemp: TemplateRef<any> | null = null;
    myTemps: QueryList<TemplateRef<any>> | null = null;

    toggleMessage() {
        this.showMessage = !this.showMessage;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.myTemp = this.myTemp1;
            this.myTemps = this.myTemps1;

        }, 100);
    }
}
