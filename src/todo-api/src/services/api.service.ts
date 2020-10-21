/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { TodoDto } from '../models/todo-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getAllCategoriesPath = '/api/categories/all';
  static readonly createCategoryPath = '/api/categories/create';
  static readonly getAllTodosPath = '/api/todos/all';
  static readonly updateTodoPath = '/api/todos/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns the list of the categories
   * @return List of the categories
   */
  getAllCategoriesResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Returns the list of the categories
   * @return List of the categories
   */
  getAllCategories(): __Observable<Array<CategoryDto>> {
    return this.getAllCategoriesResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Creates a new category
   * @return successful operation
   */
  createCategoryResponse(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Creates a new category
   * @return successful operation
   */
  createCategory(): __Observable<CategoryDto> {
    return this.createCategoryResponse().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Returns the list of the Todos
   * @return List of the Todos
   */
  getAllTodosResponse(): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/todos/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }
  /**
   * Returns the list of the Todos
   * @return List of the Todos
   */
  getAllTodos(): __Observable<Array<TodoDto>> {
    return this.getAllTodosResponse().pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * Updates an existing Todo
   * @return successful operation
   */
  updateTodoResponse(): __Observable<__StrictHttpResponse<TodoDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/todos/update`,
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
   * Updates an existing Todo
   * @return successful operation
   */
  updateTodo(): __Observable<TodoDto> {
    return this.updateTodoResponse().pipe(
      __map(_r => _r.body as TodoDto)
    );
  }
}

module ApiService {
}

export { ApiService }
