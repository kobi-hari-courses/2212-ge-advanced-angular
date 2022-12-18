import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class WrongAdditionService {
    public id: number;

    constructor(private historyService: HistoryService) {
        this.id = Math.ceil(Math.random() * 1000000);
    }

    add(n1: number, n2: number): number {
        this.historyService.record(`Wrong Addition of ${n1} and ${n2}`);
        return n1 + n2 + 1;
    }}
