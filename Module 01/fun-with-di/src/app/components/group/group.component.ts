import { Component, Input } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'], 
  providers: [AdditionService]
})
export class GroupComponent {
    @Input()
    name: string = '';

}
