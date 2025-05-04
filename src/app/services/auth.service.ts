
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private lastLoginTime = new BehaviorSubject<string>('');
  
  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
      this.lastLoginTime.next(localStorage.getItem('lastLogin') || '');
    }
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('/academy-custom/login', { username, password }).pipe(
      tap(response => {
        const currentTime = new Date().toLocaleString();
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        localStorage.setItem('lastLogin', currentTime);
        this.currentUserSubject.next(response.user);
        this.lastLoginTime.next(currentTime);
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('lastLogin');
    this.currentUserSubject.next(null);
    this.lastLoginTime.next('');
  }

  getCurrentUser() {
    return this.currentUserSubject.asObservable();
  }

  getLastLogin() {
    return this.lastLoginTime.asObservable();
  }
}
