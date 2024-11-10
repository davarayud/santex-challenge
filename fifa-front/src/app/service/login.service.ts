import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginInterface } from '../interfaces/userLogin';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:3003/api/login';
  constructor(private httpClient: HttpClient) {}

  user: UserInterface = { logged: false };

  loginUser(userToLogin: UserLoginInterface): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      const result = this.httpClient.post(this.API_URL, userToLogin);
      this.user = { logged: true, ...result };
      return result;
    } catch (error) {
      throw error;
    }
  }

  logoutUser() {
    this.user = { logged: false };
  }

  isAuthenticated() {
    return this.user;
  }
}
