import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-todo-categories',
  templateUrl: './todo-categories.component.html',
  styleUrls: ['./todo-categories.component.scss']
})
export class TodoCategoriesComponent implements OnInit {

  public categories;

  constructor(
    public categoryService: CategoryServiceService,
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.initCategories();
  }

  initCategories() {
    this.categoryService.getAllByUser(this.userService.getLoggedUser().id)
    .subscribe(data => {
      this.categories = data;
    });
  }

  editCategory(id: number) {
    this.router.navigate(['categories', 'new', id]);
  }

}
