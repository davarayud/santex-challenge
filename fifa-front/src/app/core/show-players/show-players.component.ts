import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { FilterComponent } from '../filter/filter.component';
import { PlayerInterface } from '../../interfaces/player.interface';
import { PlayersService } from '../../service/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterOptionsInterface } from '../../interfaces/filterOptions.interface';
import { DownloadCsvComponent } from '../download-csv/download-csv.component';

@Component({
  selector: 'app-show-players',
  standalone: true,
  imports: [
    CommonModule,
    CardPlayerComponent,
    FilterComponent,
    DownloadCsvComponent,
    DownloadCsvComponent,
  ],
  templateUrl: './show-players.component.html',
  styleUrl: './show-players.component.scss',
})
export class ShowPlayersComponent implements OnInit {
  players: PlayerInterface[] = [];
  showButtonPage = { prev: false, next: true };
  playerForPage = 12;
  currentPage = 1;

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let query: FilterOptionsInterface = {
      limit: 12,
      offset: 0,
      fifa_version: '23',
    };
    this.route.queryParams.subscribe((params) => {
      if (params['limit']) query.limit = params['limit'];
      if (params['offset']) query.offset = params['offset'];
      if (params['fifa_version']) query.fifa_version = params['fifa_version'];
      if (params['long_name']) query.long_name = params['long_name'];
      if (params['player_positions'])
        query.player_positions = params['player_positions'];
      if (params['club_name']) query.club_name = params['club_name'];
      if (params['nationality_name'])
        query.nationality_name = params['nationality_name'];

      if (query.offset == 0) {
        this.currentPage = 1;
        this.showButtonPage.prev = false;
      }

      this.getPlayers(query);

      query = {
        limit: 12,
        offset: 0,
        fifa_version: '23',
      };
    });
  }

  getPlayers(query: FilterOptionsInterface) {
    this.playerService.getPlayers(query).subscribe({
      next: (result) => {
        this.players = result;
        this.players.length === this.playerForPage
          ? (this.showButtonPage.next = true)
          : (this.showButtonPage.next = false);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  prevPage() {
    const filter: FilterOptionsInterface = {
      limit: 12,
      offset: 0,
      fifa_version: '23',
    };
    this.route.queryParams.subscribe((params) => {
      if (params['limit']) filter.limit = params['limit'];
      if (params['offset']) filter.offset = params['offset'];
      if (params['fifa_version']) filter.fifa_version = params['fifa_version'];
      if (params['long_name']) filter.long_name = params['long_name'];
      if (params['player_positions'])
        filter.player_positions = params['player_positions'];
      if (params['club_name']) filter.club_name = params['club_name'];
      if (params['nationality_name'])
        filter.nationality_name = params['nationality_name'];
    });
    if (this.currentPage > 1) {
      console.log('prev');
      filter.offset = (this.currentPage - 2) * this.playerForPage;
      this.currentPage = this.currentPage - 1;
      this.router.navigate(['/players'], { queryParams: filter });
    }
  }

  nextPage() {
    const filter: FilterOptionsInterface = {
      limit: 12,
      offset: 0,
      fifa_version: '23',
    };
    this.route.queryParams.subscribe((params) => {
      if (params['limit']) filter.limit = params['limit'];
      if (params['offset']) filter.offset = params['offset'];
      if (params['fifa_version']) filter.fifa_version = params['fifa_version'];
      if (params['long_name']) filter.long_name = params['long_name'];
      if (params['player_positions'])
        filter.player_positions = params['player_positions'];
      if (params['club_name']) filter.club_name = params['club_name'];
      if (params['nationality_name'])
        filter.nationality_name = params['nationality_name'];
    });
    filter.offset = this.currentPage * this.playerForPage;
    this.currentPage = this.currentPage + 1;
    this.router.navigate(['/players'], { queryParams: filter });
    this.showButtonPage.prev = true;
  }
}
