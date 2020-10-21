import { Component, OnInit, Input } from '@angular/core';
import { TodoDto, CategoryDto } from 'src/todo-api/src/models';
import { TodoServiceService } from '../services/todo-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  @Input() todoDto: TodoDto;
  @Input() category: CategoryDto;

  constructor(
    public todoService: TodoServiceService,
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
   this.setUpTodo();
  }

  addToFavorite() {
    this.todoDto.favorite = true;
    this.saveTodo();
  }

  removeFromFavorite() {
    this.todoDto.favorite = false;
    this.saveTodo();
  }

  setDone() {
    this.todoDto.done = true;
    this.saveTodo();
  }

  setUnDone() {
    this.todoDto.done = false;
    this.saveTodo();
  }

  saveTodo() {
    this.setUpTodo();
    this.todoService.save(this.todoDto)
    .subscribe(data => {
      this.todoDto = data;
      this.setUpTodo();
    });
  }

  editTodo(id: number) {
    this.router.navigate(['todo-list', 'new', id]);
  }

  setUpTodo() {
    this.todoDto.category = {id: this.category.id};
    this.todoDto.category.user = this.userService.getLoggedUser();
  }

}
