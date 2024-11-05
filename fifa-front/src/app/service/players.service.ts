import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  API_URL = 'http://localhost:3003/api/players';
  constructor(private httpClient: HttpClient) {}

  getPlayers(limit = 12, offset = 0): Observable<any> {
    return this.httpClient
      .get(`${this.API_URL}?limit=${limit}&offset=${offset}`)
      .pipe((res) => res);
  }
}
