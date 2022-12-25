import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepeaterComponent } from './components/repeater/repeater.component';
import { TitleComponent } from './components/title/title.component';
import { StamDirective } from './directives/stam.directive';
import { BlankComponent } from './components/blank/blank.component';
import { IfDirective } from './directives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeaterComponent,
    TitleComponent,
    StamDirective,
    BlankComponent,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
