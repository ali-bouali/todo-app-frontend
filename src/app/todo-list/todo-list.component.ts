import { Component, OnInit } from '@angular/core';

import { CategoryServiceService } from '../services/category-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public categories;

  constructor(
    public categoryService: CategoryServiceService,
    public activatedRouter: ActivatedRoute,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.resolveTimeParamerters();
  }

  resolveTimeParamerters() {
    const dateTime = this.activatedRouter.snapshot.params.start;
    if (dateTime && dateTime === 'today') {
      this.categoryService.getAllForToday(this.userService.getLoggedUser().id)
      .subscribe(data => {
        this.categories = data;
      });
    } else {
      this.initCategories();
    }
  }

  initCategories() {
    this.categoryService.getAllByUser(this.userService.getLoggedUser().id)
    .subscribe(data => {
      this.categories = data;
    });
  }

}
