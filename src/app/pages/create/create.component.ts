import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';

// Interface
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  todos: Todo[] = [];

  createForm = new FormGroup({
    title: new FormControl('')
  });

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  createTodo(): void {
    let title: any = this.createForm.value.title?.trim();
    let isDuplicate = this.todos.some((todo) => todo.title === title);
    
    if (title === "") {
      console.log("Empty!");
    } else if (isDuplicate) {
      console.log("Duplicate!");
    } else {
      const todo: Todo = {
        title: title,
        completed: false
      };
      this.todos.unshift(todo);
      this.todoService.putTodos(this.todos);
      this.createForm.reset();
    }
    
  }
}
