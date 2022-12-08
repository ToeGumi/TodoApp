import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    title: '',
    completed: false
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createTodo(): void {
    console.warn("your todo name is: ", this.checkoutForm.value);
  }
}
