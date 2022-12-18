import { Component, Optional, SkipSelf } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'], 
  providers: []
})
export class CalcComponent {
    result: number = 0;

    constructor(
        protected additionService: AdditionService, 
        protected service2: WrongAdditionService, 
        @Optional() private group: GroupComponent | null){}

    calc(n1: number, n2: number) {
        this.result = this.additionService.add(n1, n2);

        console.log('calculation performed on group: ', this.group?.name ?? 'no-group');
    }

}
