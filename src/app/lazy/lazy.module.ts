import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { SCOPE } from '../core/scope.token';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyComponent
      }
    ])
  ],
  providers: [
    {
      provide: SCOPE,
      useValue: 'lazy'
    }
  ]
})
export class LazyModule {
}
