import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ImageTooltipDirective } from './directives/image-tooltip.directive';
import { BlankComponent } from './components/blank/blank.component';
import { MouseFollowDirective } from './directives/mouse-follow.directive';

@NgModule({
  declarations: [
    AppComponent, 
    HighlightDirective, ImageTooltipDirective, BlankComponent, MouseFollowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
