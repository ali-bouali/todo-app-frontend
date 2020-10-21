import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/todo-api/src/models';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userDto: UserDto = {};
  public hide = true;
  public errors = [];

  constructor(
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.userDto)
    .subscribe(data => {
      this.userService.loggedUser = data;
      localStorage.setItem('loggedUser', JSON.stringify(data));
      this.router.navigate(['todo-list']);
    },
    error => {
      this.errors = [];
      if (error.error.errors === null) {
        this.errors.push(error.error.message);
      } else {
        this.errors = error.error.errors;
      }
    });
  }

  subscribe() {
    this.router.navigate(['subscribe']);
  }

}
