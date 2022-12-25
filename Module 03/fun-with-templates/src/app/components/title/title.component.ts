import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnDestroy {
    constructor() {
        console.log('App Title Created');
    }

    ngOnDestroy(): void {
        console.log('App Title Destroyed');
    }

}
