import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { User } from '../class/User';
import { Candidat } from '../class/Candidat';
import { Entreprise } from '../class/Entreprise';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Boolean> {
    return this.http.post<any>('http://localhost:8081/api/auth/login', {username, password})
      .pipe(map(res => {
          localStorage.setItem('currentUser', JSON.stringify(res.user));
          if (res.entreprise) {
            localStorage.setItem('currentEntreprise', JSON.stringify(res.entreprise));
          }
          if (res.candidat) {
            localStorage.setItem('currentCandidat', JSON.stringify(res.candidat));
          }
          localStorage.setItem('currentUser', JSON.stringify(res.user));
          localStorage.setItem('currentToken', JSON.stringify(res.token));
          localStorage.setItem('currentRefreshToken', JSON.stringify(res.refreshToken));
          this.authEvent.emit();
          return true;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentCandidat');
    localStorage.removeItem('currentEntreprise');
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentRefreshToken');
    this.authEvent.emit();
  }

  isAuthenticated(): Boolean {
    return localStorage.getItem('currentUser') != null;
  }

  getAuthenticatedUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getAuthenticatedCandidat(): Candidat {
    return JSON.parse(localStorage.getItem('currentCandidat'));
  }

  getAuthenticatedEntreprise(): Entreprise {
    return JSON.parse(localStorage.getItem('currentEntreprise'));
  }

  isAuthenticateUserCandidat(): Boolean {
    return this.getAuthenticatedUser().role.nom === 'ROLE_CANDIDAT';
  }

  isAuthenticateUserEntreprise(): Boolean {
    return this.getAuthenticatedUser().role.nom === 'ROLE_ENTREPRISE';
  }

  isAuthenticateUserAdmin(): Boolean {
    return this.getAuthenticatedUser().role.nom === 'ROLE_ADMIN';
  }

  isAuthentsicatedEntreprise(): Boolean {
    return localStorage.getItem('candidat') != null;
  }

  echo() {
    return 'echo';
  }
}
