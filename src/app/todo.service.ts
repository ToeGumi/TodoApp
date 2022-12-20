import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from './todo';
import { Observable, throwError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://6399709a29930e2bb3d2e0d4.mockapi.io/todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  getTodo(id:string): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + `/${id}`);
  }

  postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  putTodo(id: string, todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.todosUrl + `/${id}`, todo);
  }

  deleteTodo(id: string): Observable<Todo> {
    console.log("delete")
    return this.http.delete<Todo>(this.todosUrl + `/${id}`);
  }
}
