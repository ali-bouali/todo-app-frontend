import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls: ['./todo-menu.component.scss']
})
export class TodoMenuComponent implements OnInit {

  menuProperties = [
    {
      id: 'main_page',
      icon: 'home',
      title: 'Home',
      url: 'todo-list',
      numberOfelements: 0,
    },
    {
      id: 'My_Day',
      icon: 'flare',
      title: 'My Day',
      url: 'todo-list/display/today',
      numberOfelements: 0,
    },
    {
      id: 'categories',
      icon: 'category',
      title: 'Categories',
      url: 'categories',
      numberOfelements: 0,
    },
    /*{
      id: 'important',
      icon: 'star_outline',
      title: 'Important',
      url: '',
      numberOfelements: 0,
    },*/
    {
      id: 'profile',
      icon: 'account_circle',
      title: 'My profile',
      url: 'profile',
      numberOfelements: 0,
    },
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

}
