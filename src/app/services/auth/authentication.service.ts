import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private client: UsersService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email, password) {
    this.client.authenticate(email, password).subscribe(user => {
      localStorage.setItem("currentUser", JSON.stringify({ email: user.email, id: user.id }));
      this.currentUserSubject.next(user);
      return user;
    },
    err => console.log(err),
    () => this.router.navigate(['recipes']))
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
