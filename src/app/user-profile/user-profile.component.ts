import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/todo-api/src/models';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public userDto: UserDto = {};
  public hide = true;
  public errors = [];


  constructor(
    public userService: UserServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userDto = this.userService.getLoggedUser();
  }

  updateUser() {
    this.userService.saveUser(this.userDto)
    .subscribe(data => {
      this.userDto = data;
      this.userService.updateLoggedUser(data);
    });
  }

  cancel() {
    this.router.navigate(['todo-list']);
  }

}
