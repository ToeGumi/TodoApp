import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

import { SelectTodoService } from 'src/app/select-todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todoTitle?: string;
  todo?: Todo;

  constructor(private selectTodoService: SelectTodoService) {
    this.selectTodoService.todoTitle.subscribe(value => {
      this.todoTitle = value.trim().split(" ").join("-");
    });
  }

  ngOnInit(): void {
  }


}
