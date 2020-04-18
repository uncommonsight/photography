import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // private username: string = "";
  // private password: string = "";
  private user1 = 'john';
  private user2 = 'gen';
  private username: string;
  private password: string;
  private userP1 = 'user1';
  private userP2 = 'user2';
  alert: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    // let success = this.loginService.login(this.username, this.password);
    // if (success) {
    //   this.router.navigate(['user']);
    // } else {
    //   alert('nope')
    // }
    if(this.username === this.user1 && this.password === this.userP1) {
      this.router.navigate(['user']);
    } if(this.username === this.user2 && this.password === this.userP2) {
      this.router.navigate(['user2']);
    } else {
      this.username = "";
      this.password = "";
      this.alert = true;
    }
  }

}
