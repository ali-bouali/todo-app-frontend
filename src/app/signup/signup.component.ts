import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/todo-api/src/models';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userDto: UserDto = {};
  public hide = true;
  public errors = [];

  constructor(
    public userService: UserServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  updateUser() {
    this.userService.saveUser(this.userDto)
    .subscribe(data => {
      this.userDto = data;
      this.userService.loggedUser = data;
      localStorage.setItem('loggedUser', JSON.stringify(data));
      this.router.navigate(['todo-list']);
    },
    err => {
      this.errors = [];
      if (err.error.errors === null) {
        this.errors.push(err.error.message);
      } else {
        this.errors = err.error.errors;
      }
    });
  }

  login() {
    this.router.navigate(['login']);
  }

}
