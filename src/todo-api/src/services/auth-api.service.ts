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
class AuthApiService extends __BaseService {
  static readonly loginUserPath = '/api/auth/login';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a new user
   * @param body User DTO
   * @return successful operation
   */
  loginUserResponse(body: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/login`,
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
  loginUser(body: UserDto): __Observable<UserDto> {
    return this.loginUserResponse(body).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module AuthApiService {
}

export { AuthApiService }
