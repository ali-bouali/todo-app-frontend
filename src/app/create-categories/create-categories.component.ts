import { Component, OnInit } from '@angular/core';
import { CategoryDto } from 'src/todo-api/src/models';
import { CategoryServiceService } from '../services/category-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {

  public errors: string [];

  public categoryDto: CategoryDto = {};

  constructor(
    public categoryService: CategoryServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.resolveCategoryDto();
  }

  resolveCategoryDto() {
    const categoeyId = this.activatedRoute.snapshot.params.categoryId;
    if (categoeyId) {
      this.categoryService.getById(categoeyId)
      .subscribe(data => {
        this.categoryDto = data;
      },
      error => {
        this.router.navigate(['categories']);
      });
    }
  }

  saveCategory() {
    this.errors = [];
    this.categoryDto.user = this.userService.getLoggedUser();
    this.categoryService.save(this.categoryDto)
    .subscribe(data => {
      this.router.navigate(['categories']);
    },
    error => {
      this.errors = error.error.errors;
    });
  }

  cancel() {
    this.router.navigate(['categories']);
  }
}
