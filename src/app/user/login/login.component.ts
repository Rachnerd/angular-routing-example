import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'are-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn$;
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
