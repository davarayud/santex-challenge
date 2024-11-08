import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptionsInterface } from '../interfaces/filterOptions.interface';
import { PlayerInterface } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  API_URL = 'http://localhost:3003/api/players';
  constructor(private httpClient: HttpClient) {}

  getPlayers(filterOptions: FilterOptionsInterface): Observable<any> {
    let queryURL = `${this.API_URL}?limit=${filterOptions.limit}&offset=${filterOptions.offset}`;
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

    return this.httpClient.get(queryURL).pipe((res) => res);
  }

  getOnePlayer(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`);
  }

  createPlayer(playerToCreate: PlayerInterface): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_URL, playerToCreate);
  }

  updatePlayer(id: string, playerToUpdate: PlayerInterface): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(`${this.API_URL}/${id}`, playerToUpdate);
  }
}
