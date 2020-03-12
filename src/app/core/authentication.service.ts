import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: Subject<string | undefined>;
  user$: Observable<string | undefined>;
  isLoggedIn$: Observable<boolean>;

  constructor() {
    this.userSubject = new BehaviorSubject(undefined);

    this.user$ = this.userSubject.asObservable();

    this.isLoggedIn$ = this.user$.pipe(map(userOrUndefined => userOrUndefined !== undefined));
  }

  login() {
    this.userSubject.next('Username');
  }

  logout() {
    this.userSubject.next(undefined);
  }
}
