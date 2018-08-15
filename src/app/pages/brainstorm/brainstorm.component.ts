import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-brainstorm',
  templateUrl: './brainstorm.component.html',
  styleUrls: ['./brainstorm.component.css']
})
export class BrainstormComponent implements OnInit {

  public idea = '';

  constructor(private stateService: StateService,
              public dataService: DataService) {
  }

  ngOnInit() {
  }

  addIdea($event) {
    if ($event.code === 'Enter') {
      if (this.idea !== '') {
        this.dataService.ideas.push(this.idea);
        this.idea = '';
      }
    }
  }
}
