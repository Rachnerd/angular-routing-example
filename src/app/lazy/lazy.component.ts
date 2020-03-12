import { Component, Inject, OnInit } from '@angular/core';
import { SCOPE } from '../core/scope.token';

@Component({
  selector: 'are-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  constructor(@Inject(SCOPE) scope: string) {
    console.log('Lazy scope:', scope);
  }

  ngOnInit() {}
}
