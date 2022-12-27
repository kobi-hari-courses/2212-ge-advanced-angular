import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
    selector: 'app-counter-reader',
    templateUrl: './counter-reader.component.html',
    styleUrls: ['./counter-reader.component.css'], 
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
    stam: number = 10;

    value$!: Observable<number>;

    constructor(
        private counterService: CounterService, 
        private changeDetector: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.value$ = this.counterService.getValue();

        setTimeout(() =>{
            this.stam = 20;
            console.log('changed stam to 20');
            this.changeDetector.detectChanges();
        } , 5000);
    }
}
