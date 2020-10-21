import { Injectable } from '@angular/core';
import { UserDto } from 'src/todo-api/src/models';
import { ApiusersService } from 'src/todo-api/src/services';
import { AuthApiService } from 'src/todo-api/src/services/auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public loggedUser: UserDto;

  constructor(
    public userApiService: ApiusersService,
    public authService: AuthApiService,
  ) { }

  saveUser(userDto: UserDto) {
    return this.userApiService.createUser(userDto);
  }

  login(userDto: UserDto) {
    return this.authService.loginUser(userDto);
  }

  updateLoggedUser(userDto: UserDto) {
    this.loggedUser = userDto;
    localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
  }

  getLoggedUser() {
    if (this.loggedUser !== null && this.loggedUser !== undefined) {
      return this.loggedUser;
    }
    if (localStorage.getItem('loggedUser') !== null && localStorage.getItem('loggedUser') !== undefined) {
      this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      return this.loggedUser;
    }
    return null;
  }
}
