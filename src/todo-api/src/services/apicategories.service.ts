/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TodoDto } from '../models/todo-dto';
import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class ApicategoriesService extends __BaseService {
  static readonly deleteCategoryPath = '/api/api/categories/delete/{id}';
  static readonly getAllTodoByCategoriesForTodayPath = '/api/categories/todos/today/{userId}';
  static readonly getAllTodoByCategoriesIdPath = '/api/categories/todos/{id}';
  static readonly updateCategoryPath = '/api/categories/update';
  static readonly getAllCategoriesByUserIdPath = '/api/categories/users/{id}';
  static readonly getCategoryPath = '/api/categories/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Deletes a category by ID
   * @param id The category id
   */
  deleteCategoryResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/api/categories/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Deletes a category by ID
   * @param id The category id
   */
  deleteCategory(id: number): __Observable<null> {
    return this.deleteCategoryResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns the list of the Todo of a selected category
   * @param userId User ID
   * @return List of the Todos
   */
  getAllTodoByCategoriesForTodayResponse(userId: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (userId != null) __params = __params.set('userId', userId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/todos/today/${userId}`,
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
   * Returns the list of the Todo of a selected category
   * @param userId User ID
   * @return List of the Todos
   */
  getAllTodoByCategoriesForToday(userId: number): __Observable<Array<TodoDto>> {
    return this.getAllTodoByCategoriesForTodayResponse(userId).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * Returns the list of the Todo of a selected category
   * @param id Category ID
   * @return List of the Todos
   */
  getAllTodoByCategoriesIdResponse(id: number): __Observable<__StrictHttpResponse<Array<TodoDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/todos/${id}`,
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
   * Returns the list of the Todo of a selected category
   * @param id Category ID
   * @return List of the Todos
   */
  getAllTodoByCategoriesId(id: number): __Observable<Array<TodoDto>> {
    return this.getAllTodoByCategoriesIdResponse(id).pipe(
      __map(_r => _r.body as Array<TodoDto>)
    );
  }

  /**
   * Updates an existing Category
   * @param body Category DTO
   * @return successful operation
   */
  updateCategoryResponse(body: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/categories/update`,
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
   * Updates an existing Category
   * @param body Category DTO
   * @return successful operation
   */
  updateCategory(body: CategoryDto): __Observable<CategoryDto> {
    return this.updateCategoryResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Returns the list of the categories of a selected user
   * @param id User ID
   * @return List of the categories
   */
  getAllCategoriesByUserIdResponse(id: number): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/users/${id}`,
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
   * Returns the list of the categories of a selected user
   * @param id User ID
   * @return List of the categories
   */
  getAllCategoriesByUserId(id: number): __Observable<Array<CategoryDto>> {
    return this.getAllCategoriesByUserIdResponse(id).pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Returns the list of the users
   * @param id The category id
   * @return The Category
   */
  getCategoryResponse(id: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/${id}`,
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
   * Returns the list of the users
   * @param id The category id
   * @return The Category
   */
  getCategory(id: number): __Observable<CategoryDto> {
    return this.getCategoryResponse(id).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }
}

module ApicategoriesService {
}

export { ApicategoriesService }
