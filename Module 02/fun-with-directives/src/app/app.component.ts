import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    myFavoriteColor: string = 'pink';

    doSomething(previousColor: string) {
        console.log('do something', previousColor);
    }

    ngOnInit(): void {
        const colors = ['pink', 'lime', 'cyan'];
        let i = 0;
        setInterval(() => {
            i = (i + 1) % 3; 
            this.myFavoriteColor = colors[i];
        }, 3000);
    }

}
