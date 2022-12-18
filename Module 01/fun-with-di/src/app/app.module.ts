import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { DemoModule } from './demo/demo.module';
import { Demo2Module } from './demo2/demo2.module';
import { AdditionService } from './services/addition.service';
import { StamService } from './services/stam.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { HISTORY_PREFIX } from './tokens/history-prefix.token';
import { NUMBER_TOKEN } from './tokens/number-demo.token';

function calculatePrefix() {
    const now = new Date();
    return now.toTimeString();
}

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent, 
  ],
  imports: [
    BrowserModule,
    DemoModule, 
    Demo2Module
  ],
  providers: [    
    {
        provide: AdditionService, 
        useExisting: WrongAdditionService
    }, 
    {
        provide: HISTORY_PREFIX, 
        useFactory: (stam: StamService) => () => stam.getSomeString(),
        deps: [StamService]
    }, 
    {
        provide: APP_INITIALIZER, 
        useFactory: (stam: StamService) => () => stam.init(),
        deps: [StamService], 
        multi: true
    }, 
    {
        provide: NUMBER_TOKEN, 
        useValue: 42, 
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
