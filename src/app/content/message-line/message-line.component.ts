import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-line',
  templateUrl: './message-line.component.html',
  styleUrls: ['./message-line.component.css']
})
export class MessageLineComponent implements OnInit {
  @Input() message: string;
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
