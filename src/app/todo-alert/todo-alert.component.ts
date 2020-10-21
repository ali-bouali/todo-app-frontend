import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-alert',
  templateUrl: './todo-alert.component.html',
  styleUrls: ['./todo-alert.component.scss']
})
export class TodoAlertComponent implements OnInit {

  @Input() content: string[];
  @Input() alertType = 'error';

  constructor() { }

  ngOnInit(): void {
  }

}
