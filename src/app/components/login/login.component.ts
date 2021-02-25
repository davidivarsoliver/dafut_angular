import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {login: "", password: "", token: ""};
  remember = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')) {
      this.user.login = localStorage.getItem('login') || "";
      this.remember = true;
    }
  }


  login() {
  this.auth.authUser(this.user,this.remember).subscribe(
  u => {
    console.log(u);
    this.user = u;

  }
  );


  }
}
