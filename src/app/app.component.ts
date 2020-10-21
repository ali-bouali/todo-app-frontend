import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  newTodo = false;

  title = 'todo-web-app';
  mode = new FormControl('slide');

  constructor(
    public userService: UserServiceService
  ) {}

  toggolMenuClick() {
    this.sidenav.toggle();
  }

  createNewTodo() {
    console.log('click');
    this.newTodo = true;
  }

  isUserLogged() {
    return this.userService.getLoggedUser() !== null && this.userService.getLoggedUser() !== undefined;
  }
}
