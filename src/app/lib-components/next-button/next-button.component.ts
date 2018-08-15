import { Component, OnInit } from '@angular/core';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent implements OnInit {
  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  changeState() {
  }

}
