import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '/assets/json/users.json';

  authUser(user: User, remember: boolean): Observable<User>{
    return this.http.get<User>(this.url)
    .pipe(map(u => {
       u['password']= user.password; 
       localStorage.setItem('token',u.token);
       if (remember) {

        localStorage.setItem('login',u.login);
       } else {
         localStorage.removeItem('login');
       }
       return u;}));
  }
  isAuth(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    else return false;
  }

  logOut(): void {
  localStorage.removeItem('token');
  }
}
