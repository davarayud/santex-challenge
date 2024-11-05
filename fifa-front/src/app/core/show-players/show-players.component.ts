import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOnePlayerComponent } from '../show-one-player/show-one-player.component';
import { FilterComponent } from '../filter/filter.component';
import { PlayerInterface } from '../../interfaces/player.interface';
import { PlayersService } from '../../service/players.service';

@Component({
  selector: 'app-show-players',
  standalone: true,
  imports: [CommonModule, ShowOnePlayerComponent, FilterComponent],
  templateUrl: './show-players.component.html',
  styleUrl: './show-players.component.scss',
})
export class ShowPlayersComponent implements OnInit {
  players: PlayerInterface[] = [];
  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe({
      next: (result) => {
        this.players = result;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
