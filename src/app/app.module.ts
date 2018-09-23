import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockupComponent } from './mockup/mockup.component';
import { StepsComponent } from './steps/steps.component';
import { MouseComponent } from './mouse/mouse.component';

@NgModule({
  declarations: [
    AppComponent,
    MockupComponent,
    StepsComponent,
    MouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
