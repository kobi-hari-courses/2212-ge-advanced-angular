import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { quizReducer } from './redux/quiz.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({
        quiz: quizReducer
    }), 
    StoreDevtoolsModule.instrument({
        maxAge: 50, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
