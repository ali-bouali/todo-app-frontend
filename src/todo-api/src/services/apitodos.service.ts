/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TodoDto } from '../models/todo-dto';
@Injectable({
  providedIn: 'root',
})
class ApitodosService extends __BaseService {
  static readonly createTodoPath = '/api/todos/create';
  static readonly deleteTodoPath = '/api/todos/delete/{id}';
  static readonly getTodoPath = '/api/todos/{todoId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a new to do
   * @param body Todo DTO
   * @return successful operation
   */
  createTodoResponse(body: TodoDto): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/todos/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDto>;
      })
    );
  }
  /**
   * Creates a new to do
   * @param body Todo DTO
   * @return successful operation
   */
  createTodo(body: TodoDto): __Observable<TodoDto> {
    return this.createTodoResponse(body).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * Deletes a Todo by ID
   * @param id The Todo id
   * @return The Todo deleted
   */
  deleteTodoResponse(id: number): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/todos/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDto>;
      })
    );
  }
  /**
   * Deletes a Todo by ID
   * @param id The Todo id
   * @return The Todo deleted
   */
  deleteTodo(id: number): __Observable<TodoDto> {
    return this.deleteTodoResponse(id).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }

  /**
   * Returns the Todo
   * @param todoId The Todo id
   * @return The Todo
   */
  getTodoResponse(todoId: number): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (todoId != null) __params = __params.set('todoId', todoId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/todos/${todoId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDto>;
      })
    );
  }
  /**
   * Returns the Todo
   * @param todoId The Todo id
   * @return The Todo
   */
  getTodo(todoId: number): __Observable<TodoDto> {
    return this.getTodoResponse(todoId).pipe(
      __map(_r => _r.body as TodoDto)
    );
  }
}

module ApitodosService {
}

export { ApitodosService }
