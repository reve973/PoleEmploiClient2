import {USERS_MOCK} from '../class/data.mock';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationMockService {

  authEvent = new EventEmitter<string>();

  constructor(private http: HttpClient/*, private uService: UsersService*/) {}

  login(username: string, password: string): Observable<User> {
/*    const users: User[] = USERS_MOCK;

    const index = users.findIndex(function (obj) {
      return obj.login === username && obj.password === password;
    });

    if (index > -1) {
      const user: User = users[index];
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authEvent.emit();
      return of(user);
    } else {
      return of(null);
    }*/
    return of(null);
  }


  /*localStorage.setItem('currentUser', JSON.stringify(user));
  console.log(JSON.stringify(user));
  console.log(localStorage.getItem('currentUser'));
  /*return this.http.post<any>('http://localhost:8081/users/authenticate', { username: username, password: password })
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    }));*/

  logout() {
    localStorage.removeItem('currentUser');
    this.authEvent.emit();
  }

  isAuthenticated(): Boolean {
    return localStorage.getItem('currentUser') != null;
  }

  getAuthentsicatedUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  echo() {
    return 'echo';
  }
}

