import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

export class User {
  constructor(public id = 0, public email = '') {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* Le user authentifié */
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  /* Gérilie est ce que je suis authentifié  */
  isLoggedIn$: Observable<boolean>;
  /* Gérilie est ce que je ne suis pas authentifié */
  isLoggedOut$: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(
      tap((user) => console.log(user)),
      map((user) => this.isAuthenticated() && !!user)
    );
    this.isLoggedOut$ = this.user$.pipe(
      tap((user) => console.log('loggedOut', user)),
      map((user) => !user)
    );
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((loginResponseDto) => {
        /* Je vais créer le user 
          JE vais emmetre le user 
          je vais mettre le user dans le localstoreg
        */
        const user = new User(loginResponseDto.userId, credentials.email);
        localStorage.setItem('token', loginResponseDto.id);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
