import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

// Service
import { SelectTodoService } from 'src/app/select-todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedTodo?: Todo;
  todoTitle?: string;

  constructor(private selectTodoService: SelectTodoService) {}

  ngOnInit(): void {
    this.selectTodoService.selectedTodo.subscribe(value => {
      this.selectedTodo = value;
      this.todoTitle = value.title;
    });
  }


}
