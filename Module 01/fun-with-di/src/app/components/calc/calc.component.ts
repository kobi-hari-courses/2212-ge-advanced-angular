import { Component, SkipSelf } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'], 
  providers: [AdditionService]
})
export class CalcComponent {
    result: number = 0;

    constructor(
        protected additionService: AdditionService){}

    calc(n1: number, n2: number) {
        this.result = this.additionService.add(n1, n2);
    }

}
