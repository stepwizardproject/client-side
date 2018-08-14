import { Component, OnInit } from '@angular/core';
import {State} from '../models/state';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public states: State[] = [];
  public currentState: State = null;
  constructor(private stateService: StateService) {
    this.states = this.stateService.getStates();
    this.stateService.currentState.subscribe((state) => {
      this.currentState = state;
    });
  }

  ngOnInit() {
  }

}
