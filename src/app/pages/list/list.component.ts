import { Component, OnInit } from '@angular/core';

// Data
import { TODOS } from 'src/app/mock-todos';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  todos: Todo[] = TODOS;
  
  checkCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
