import { Component, OnInit } from '@angular/core';
import { TodoDto } from 'src/todo-api/src/models';
import { CategoryServiceService } from '../services/category-service.service';
import { TodoServiceService } from '../services/todo-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  public errors: string [];

  public todoDto: TodoDto = {
    category: {}
  };
  public categories;

  constructor(
    public categoryService: CategoryServiceService,
    public todoService: TodoServiceService,
    public userService: UserServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initCategories();
    this.resolveTodoDto();
  }

  resolveTodoDto() {
    const todoId = this.activatedRoute.snapshot.params.todoId;
    if (todoId) {
      this.todoService.getById(todoId)
      .subscribe(data => {
        this.todoDto = data;
      },
      error => {
        this.cancel();
      });
    }

  }

  initCategories() {
    this.categoryService.getAllByUser(this.userService.getLoggedUser().id)
    .subscribe(data => {
      this.categories = data;
    });
  }

  saveTodo() {
    this.errors = [];
    this.todoDto.category.user = this.userService.getLoggedUser();
    this.todoService.save(this.todoDto)
    .subscribe(data => {
      this.router.navigate(['todo-list']);
    },
    error => {
      this.errors = error.error.errors;
    });
  }

  cancel() {
    this.router.navigate(['todo-list']);
  }

}
