import { Component, Inject, OnInit } from '@angular/core';
import { SCOPE } from '../core/scope.token';

@Component({
  selector: 'are-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(SCOPE) scope: string) {
    console.log('Home scope:', scope);
  }

  ngOnInit() {}
}
