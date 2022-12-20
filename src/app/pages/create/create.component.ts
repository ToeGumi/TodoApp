import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
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
  successMessage:string = "";

  constructor(
    private todoService$: TodoService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.todoService$.getTodos().subscribe(todos => this.todos = todos);

    this.createForm = new FormGroup({
      title: new FormControl(this.todoTitle, [
        Validators.required,
        Validators.pattern(/^[^-\d\s].*/),
        noDuplicated(this.todos)
      ])
    });

    this.elementRef.nativeElement.querySelector('input').focus();
  }

  get title() {return this.createForm.get('title')}

  createTodo(): void {
    if (this.title.valid) {
      const todo: Todo = {
        id: '',
        title: this.todoTitle.trim(),
        completed: false
      };
      this.todoService$.postTodo(todo).subscribe(res => {
        this.successMessage = `${res.title} create successfully!`;
        setTimeout(() => this.successMessage = "", 4000);
      });
      this.createForm.reset();
      this.elementRef.nativeElement.querySelector('input').focus();
    } else {
      console.log("Invalid!");
    }
  }
}
