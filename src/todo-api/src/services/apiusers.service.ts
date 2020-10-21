/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
@Injectable({
  providedIn: 'root',
})
class ApiusersService extends __BaseService {
  static readonly getAllUsersPath = '/api/users/all';
  static readonly createUserPath = '/api/users/create';
  static readonly deleteUserPath = '/api/users/delete/{id}';
  static readonly getUserPath = '/api/users/{id}';
  static readonly updateUserPath = '/api/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns the list of the users
   * @return List of the users
   */
  getAllUsersResponse(): __Observable<__StrictHttpResponse<Array<UserDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDto>>;
      })
    );
  }
  /**
   * Returns the list of the users
   * @return List of the users
   */
  getAllUsers(): __Observable<Array<UserDto>> {
    return this.getAllUsersResponse().pipe(
      __map(_r => _r.body as Array<UserDto>)
    );
  }

  /**
   * Creates a new user
   * @param body User DTO
   * @return successful operation
   */
  createUserResponse(body: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Creates a new user
   * @param body User DTO
   * @return successful operation
   */
  createUser(body: UserDto): __Observable<UserDto> {
    return this.createUserResponse(body).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * Deletes a user by ID
   * @param id The use id
   * @return The user
   */
  deleteUserResponse(id: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/users/delete/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Deletes a user by ID
   * @param id The use id
   * @return The user
   */
  deleteUser(id: number): __Observable<UserDto> {
    return this.deleteUserResponse(id).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * Returns the list of the users
   * @param id The use id
   * @return The user
   */
  getUserResponse(id: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Returns the list of the users
   * @param id The use id
   * @return The user
   */
  getUser(id: number): __Observable<UserDto> {
    return this.getUserResponse(id).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * Updates an existing user
   * @param params The `ApiusersService.UpdateUserParams` containing the following parameters:
   *
   * - `id`: User ID
   *
   * - `body`: User DTO
   *
   * @return successful operation
   */
  updateUserResponse(params: ApiusersService.UpdateUserParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * Updates an existing user
   * @param params The `ApiusersService.UpdateUserParams` containing the following parameters:
   *
   * - `id`: User ID
   *
   * - `body`: User DTO
   *
   * @return successful operation
   */
  updateUser(params: ApiusersService.UpdateUserParams): __Observable<UserDto> {
    return this.updateUserResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module ApiusersService {

  /**
   * Parameters for updateUser
   */
  export interface UpdateUserParams {

    /**
     * User ID
     */
    id: number;

    /**
     * User DTO
     */
    body: UserDto;
  }
}

export { ApiusersService }
