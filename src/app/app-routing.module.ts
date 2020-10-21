import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoCategoriesComponent } from './todo-categories/todo-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './guard/application-guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'todo-list/display/:start',
    component: TodoListComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'todo-list/new',
    component: CreateTodoComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'todo-list/new/:todoId',
    component: CreateTodoComponent
  },
  {
    path: 'categories',
    component: TodoCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'categories/new',
    component: CreateCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'categories/new/:categoryId',
    component: CreateCategoriesComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'subscribe',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
