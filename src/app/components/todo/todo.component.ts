import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  _todo!: Todo;
  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
  }
  get todo(): Todo { return this._todo };
  @Input() props: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
