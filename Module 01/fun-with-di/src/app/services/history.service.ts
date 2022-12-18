import { Inject, Injectable } from "@angular/core";
import { HISTORY_PREFIX } from "../tokens/history-prefix.token";
import { NUMBER_TOKEN } from "../tokens/number-demo.token";
import { StamService } from "./stam.service";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    private records: string[] = [];

    constructor(
        @Inject(HISTORY_PREFIX) private prefix: () => string,
        @Inject(NUMBER_TOKEN) private num: number[],
        private stam: StamService

    ) {
        console.log('History service created');
        console.log('the injected number is ', this.num);
    }

    record(msg: string) {
        this.records.push(this.prefix() + ' ' + msg);
        console.log('history: ', this.records);
    }
}