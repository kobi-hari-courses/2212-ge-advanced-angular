import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, interval, map, merge, mergeAll, Observable, Observer, of, ReplaySubject, Subject, switchAll, timer } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    search$ = new Subject<string>();

    results$!: Observable<Color[]>;

    isBusy$!: Observable<boolean>;

    constructor(private colorsService: ColorsService){}

    ngOnInit(): void {
        const res$ = this.search$.pipe(
            map(keyword => this.colorsService.search(keyword)), 
            switchAll()
        );

        this.results$ = res$;

        const true$ = this.search$.pipe(map(_ => true));
        const false$ = this.results$.pipe(map(_ => false));

        this.isBusy$ = merge(true$, false$);
    }








    showReader: boolean = true;
    toggleReader() {
        this.showReader = !this.showReader;
    }

    createObserver(id: string): Observer<number> {
        return {
            next: (val: number) => console.log(`Observer ${id} next ${val}`), 
            complete: () => console.log(`Observer ${id} complete`), 
            error: err => console.log(`Observer ${id} error ${err}`)
        }
    }

    createOfObservable(): Observable<number> {
        return of(1, 2, 3);
    }

    createFromObservable(): Observable<number> {
        return from([1, 2, 3]);
    }

    createTimerObservable(): Observable<number> {
        return timer(2000, 500);
    }

    createIntervalObservable(): Observable<number> {
        return interval(1000);
    }

    createCustomnObservable(): Observable<number> {
        return new Observable(observer => {
            observer.next(42);
            observer.next(100);
            setTimeout(() => observer.next(200), 2000);
            setTimeout(() => observer.next(300), 4000);
            setTimeout(() => observer.next(400), 6000);
            setTimeout(() => observer.next(500), 8000);
            setTimeout(() => observer.complete(), 10000);
            setTimeout(() => observer.next(600), 13000);
        })
    }

    createCustomnSubject(): Observable<number> {
        const subj = new Subject<number>();

        subj.next(42);
        subj.next(100);
        setTimeout(() => subj.next(200), 2000);
        setTimeout(() => subj.next(300), 4000);
        setTimeout(() => subj.next(400), 6000);
        setTimeout(() => subj.next(500), 8000);
        setTimeout(() => subj.complete(), 10000);
        setTimeout(() => subj.next(600), 13000);

        return subj;
    }

    createCustomnBehaviorSubject(): Observable<number> {
        const subj = new BehaviorSubject<number>(42);

        setTimeout(() => subj.next(200), 2000);
        setTimeout(() => subj.next(300), 4000);
        setTimeout(() => subj.next(400), 6000);
        setTimeout(() => subj.next(500), 8000);
        setTimeout(() => subj.complete(), 10000);
        setTimeout(() => subj.next(600), 13000);

        return subj;
    }

    createCustomReplaySubject(): Observable<number> {
        const subj = new ReplaySubject<number>(2);

        subj.next(42);
        subj.next(100);
        subj.next(150);

        setTimeout(() => subj.next(200), 2000);
        setTimeout(() => subj.next(300), 4000);
        setTimeout(() => subj.next(400), 6000);
        setTimeout(() => subj.next(500), 8000);
        setTimeout(() => subj.complete(), 10000);
        setTimeout(() => subj.next(600), 13000);

        return subj;
    }


    go() {
        const observerA = this.createObserver('A');
        const observerB = this.createObserver('B');

        const observable = this.createCustomReplaySubject();

        observable.subscribe(observerA);

        setTimeout(() => observable.subscribe(observerB), 2500);
    }
}
