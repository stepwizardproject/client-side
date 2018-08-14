import { Component, OnInit } from '@angular/core';
import {State} from '../../models/state';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {
  constructor(stateService: StateService) { }

  ngOnInit() {
  }

  changeState() {

  }

}
