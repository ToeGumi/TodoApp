import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';
// Interface
import { Todo } from 'src/app/todo';
// Validators
import { noDuplicated } from 'src/app/validators/no-duplicated.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  todos: Todo[] = [];
  todoTitle!: string;

  createForm:any;

  constructor(
    private todoService: TodoService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.createForm = new FormGroup({
      title: new FormControl(this.todoTitle, [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/[a-zA-Z]*/),
        noDuplicated(this.todos)
      ])
    });
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  get title() {return this.createForm.get('title')}

  createTodo(): void {
    
    if (this.title.valid) {
      const todo: Todo = {
        title: this.todoTitle.trim(),
        completed: false
      };
      this.todos.unshift(todo);
      this.todoService.putTodos(this.todos);
      this.createForm.reset();
      this.elementRef.nativeElement.querySelector('input').focus();
    } else {
      console.log("Invalid!");
    }
  }
}
