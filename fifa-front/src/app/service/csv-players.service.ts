import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptionsInterface } from '../interfaces/filterOptions.interface';

@Injectable({
  providedIn: 'root',
})
export class CsvDownloadService {
  API_URL = 'http://localhost:3003/api/csv';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: '',
  });
  constructor(private httpClient: HttpClient) {}

  getPlayers(filterOptions: FilterOptionsInterface): Observable<Blob> {
    let queryURL = `${this.API_URL}?`;
    if (filterOptions.fifa_version !== 'All')
      queryURL = `${queryURL}&fifa_version=${filterOptions.fifa_version}`;
    if (filterOptions.long_name)
      queryURL = `${queryURL}&long_name=${filterOptions.long_name}`;
    if (filterOptions.player_positions)
      queryURL = `${queryURL}&player_positions=${filterOptions.player_positions}`;
    if (filterOptions.club_name)
      queryURL = `${queryURL}&club_name=${filterOptions.club_name}`;
    if (filterOptions.nationality_name)
      queryURL = `${queryURL}&nationality_name=${filterOptions.nationality_name}`;

    return this.httpClient.get(queryURL, {
      headers: this.headers,
      responseType: 'blob',
    });
  }

  setToken(token: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
  }
}
