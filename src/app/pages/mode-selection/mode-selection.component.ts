import { Component, OnInit } from '@angular/core';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-mode-selection',
  templateUrl: './mode-selection.component.html',
  styleUrls: ['./mode-selection.component.css']
})
export class ModeSelectionComponent implements OnInit {

  constructor(private stateService = new StateService()) { }

  ngOnInit() {
  }

  chooseMode(mode: string): any {
    this.stateService.nextState();
  }
}
