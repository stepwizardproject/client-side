import { Component, OnInit } from '@angular/core';
import {State} from '../models/state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public states: State[] = [
    new State('intro'),
    new State('challenge'),
    new State('brainstorm'),
    new State('results'),
    new State('sorting'),
    new State('cost/impact'),
    new State('matrix')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
