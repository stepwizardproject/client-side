import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ModeSelectorComponent } from './content/mode-selector/mode-selector.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageLineComponent } from './content/message-line/message-line.component';
import { NextButtonComponent } from './lib-components/next-button/next-button.component';
import { ModeSelectionComponent } from './pages/mode-selection/mode-selection.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import {NgModule} from '@angular/core';
import { ResultsComponent } from './pages/results/results.component';
import { BrainstormComponent } from './pages/brainstorm/brainstorm.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ModeSelectorComponent,
    NavBarComponent,
    MessageLineComponent,
    NextButtonComponent,
    ModeSelectionComponent,
    ChallengeComponent,
    ResultsComponent
    ChallengeComponent,
    BrainstormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
