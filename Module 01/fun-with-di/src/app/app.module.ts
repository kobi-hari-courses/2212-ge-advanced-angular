import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { HistoryService } from './services/history.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HISTORY_PREFIX } from './tokens/history-prefix.token';

function calculatePrefix() {
    const now = new Date();
    return now.toTimeString();
}

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [    
    {
        provide: AdditionService, 
        useExisting: WrongAdditionService
    }, 
    {
        provide: HISTORY_PREFIX, 
        useFactory: calculatePrefix
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
