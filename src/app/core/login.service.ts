import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  // login(user: string, password: string): boolean {
  //   // call api
  //   // api will return token
  //   // localStorage.setItem('currentUser', user);
  //   return true;
  // }

  logout() {
   localStorage.clear();
  }
}