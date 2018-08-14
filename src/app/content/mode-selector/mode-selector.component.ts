import {Component, Input, OnInit} from '@angular/core';
import {ModeSelectorInput} from '../../models/mode.selector.input';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.css']
})
export class ModeSelectorComponent implements OnInit {
  @Input() input: ModeSelectorInput;

  constructor() {
  }

  ngOnInit() {

  }

  selectMode() {

  }
}
