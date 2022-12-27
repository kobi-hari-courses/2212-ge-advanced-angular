import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private counter: number = 0;
    private counter$ = new BehaviorSubject<number>(this.counter);

    getValue(): Observable<number> {
        return this.counter$.asObservable();
    }

    increment() {
        this.counter ++;
        this.counter$.next(this.counter);
    }

    decrement() {
        this.counter --;
        this.counter$.next(this.counter);
    }

    constructor() { }
}
