import {Component, OnInit} from '@angular/core';
import {StateService} from '../services/state.service';
import {State} from '../models/state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public currentState: State;

  constructor(stateService: StateService) {
    stateService.currentState.subscribe((newState) => this.currentState = newState);
  }

  ngOnInit() {
  }

}
