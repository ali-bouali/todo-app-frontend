import { Injectable } from '@angular/core';
import { TodoDto } from 'src/todo-api/src/models';
import { ApiService, ApitodosService } from 'src/todo-api/src/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(
    public todoService: ApitodosService,
    public apiService: ApiService
  ) { }

  save(todoDto: TodoDto): Observable<TodoDto> {
    return this.todoService.createTodo(todoDto);
  }

  getById(todoId: number) {
    return this.todoService.getTodo(todoId);
  }
}
