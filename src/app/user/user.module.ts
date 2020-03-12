import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [UserComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: UserComponent,
        path: 'user',
        canActivate: [AuthenticationGuard]
      },

      {
        component: LoginComponent,
        path: 'login'
      }
    ])
  ]
})
export class UserModule {}
