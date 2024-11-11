import { Injectable } from '@angular/core';
import { NewUserInterface } from '../interfaces/newuser.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'http://localhost:3003/api/users';
  constructor(private httpClient: HttpClient) {}

  createUser(userToCreate: NewUserInterface): Observable<any> {
    return this.httpClient.post(this.API_URL, userToCreate);
  }
}
