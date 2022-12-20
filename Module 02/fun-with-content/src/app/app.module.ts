import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { IsAliveDirective } from './directives/is-alive.directive';
import { BlankComponent } from './components/blank/blank.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';
import { TogglerContentComponent } from './components/expander/toggler-content/toggler-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpanderComponent,
    IsAliveDirective,
    BlankComponent,
    ExpanderToggleDirective,
    TogglerContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
