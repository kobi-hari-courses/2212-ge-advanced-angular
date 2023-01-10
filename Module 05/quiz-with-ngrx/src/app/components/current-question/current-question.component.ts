import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';
import { QuizSelectors } from 'src/app/redux/quiz.types';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.css']
})
export class CurrentQuestionComponent implements OnInit {
    question$!: Observable<Question>;

    constructor(private store: Store<any>){}

    ngOnInit(): void {
        this.question$ = this.store.select(QuizSelectors.currentQuestion);
    }

}
