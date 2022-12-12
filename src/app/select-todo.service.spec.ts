import { TestBed } from '@angular/core/testing';

import { SelectTodoService } from './select-todo.service';

describe('SelectTodoService', () => {
  let service: SelectTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
