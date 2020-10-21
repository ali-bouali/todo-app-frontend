import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onMenuButtonClick = new EventEmitter<any>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAddTodoClick = new EventEmitter<any>();

  public userName;

  constructor(
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.userName = this.userService.getLoggedUser().firstName;

  }

  menuButtonClick() {
    this.onMenuButtonClick.emit();
  }

  addTodoClick() {
    this.router.navigate(['todo-list', 'new']);
  }

  addCategoryClick() {
    this.router.navigate(['categories', 'new']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToHome() {
    this.router.navigate(['todo-list']);
  }

  logout() {
    this.userService.loggedUser = null;
    localStorage.setItem('loggedUser', null);
    this.router.navigate(['login']);
  }

}
