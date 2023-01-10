import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer.model';
import { QuizSelectors } from 'src/app/redux/quiz.types';
import { ProgressViewModel } from './progress.vm';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit{
    vm$!: Observable<ProgressViewModel>

    constructor(private store: Store<any>){}

    ngOnInit(): void {
        const questionsCount$ = this.store.select(QuizSelectors.questionsCount);
        const answers$ = this.store.select(QuizSelectors.allAnswers);

        this.vm$ = combineLatest([questionsCount$, answers$]).pipe(
            map(pair => this.createViewModel(...pair))
        )        
    }


    private createViewModel(questionsCount: number, answers: Answer[]): ProgressViewModel {

        const empty = Array(questionsCount).fill(null);

        const res = {
            items: empty.map((_, index) => (answers.length > index) 
            ? (answers[index].isCorrect ? 'Correct' : 'Wrong')
            : 'Empty')
        }

        console.log('View Model', questionsCount, answers, res);
        return res;
    }
}


