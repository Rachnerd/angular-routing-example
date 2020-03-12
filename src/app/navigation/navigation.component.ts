import { Component, OnInit } from '@angular/core';

interface NavigationMenuItem {
  title: string;
  link: string;
  exact?: boolean;
}

@Component({
  selector: 'are-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // <a
  //   mat-list-item
  //   routerLink="/"
  //   routerLinkActive="navigation__link--active"
  //     [routerLinkActiveOptions]="{ exact: true }"
  //     >Home</a
  //     >
  //     <a mat-list-item routerLink="/todos" routerLinkActive="navigation__link--active">Todos</a>
  //     <a mat-list-item routerLink="/todos/list" routerLinkActive="navigation__link--active">> Todos list</a>
  // <a mat-list-item routerLink="/todos/create" routerLinkActive="navigation__link--active">> Create Todo</a>
  // <a mat-list-item routerLink="/login" routerLinkActive="navigation__link--active">Login</a>
  //     <a mat-list-item routerLink="/user" routerLinkActive="navigation__link--active">User</a>

  menuItems: NavigationMenuItem[] = [
    {
      title: 'Home',
      link: '/',
      exact: true
    },
    {
      title: 'Todos',
      link: '/todos'
    },
    {
      title: '> Todos list',
      link: '/todos/list'
    },
    {
      title: '> Create Todo',
      link: '/todos/create'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'User',
      link: '/user'
    },
    {
      title: 'Lazy',
      link: '/lazy'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
