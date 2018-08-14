import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ModeSelectorComponent } from './content/mode-selector/mode-selector.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageLineComponent } from './content/message-line/message-line.component';
import { NextButtonComponent } from './lib-components/next-button/next-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ModeSelectorComponent,
    NavBarComponent,
    MessageLineComponent,
    NextButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
