import { Component, OnInit } from '@angular/core';
import {StateService} from '../../services/state.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  public problem: string;
  public minutes: number[] = [1, 2, 3, 4, 5, 6];

  constructor(private stateService: StateService,
              private dataService: DataService) { }

  ngOnInit() {
  }

  nextStep() {
    this.dataService.minutes = parseInt((<HTMLInputElement>document.querySelector(`input:checked`)).value, 10);
    this.dataService.question = this.problem;

    this.stateService.nextState();
  }
}
