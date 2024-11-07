import { Component, OnInit } from '@angular/core';
import { PlayerInterface } from '../../interfaces/player.interface';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../service/players.service';
import { SkillsChartComponent } from '../skills-chart/skills-chart.component';

@Component({
  selector: 'app-show-one-player',
  standalone: true,
  imports: [SkillsChartComponent],
  templateUrl: './show-one-player.component.html',
  styleUrl: './show-one-player.component.scss',
})
export class ShowOnePlayerComponent implements OnInit {
  playerId: string = '';
  player: PlayerInterface = {
    fifa_version: '',
    fifa_update: '',
    player_face_url: '',
    long_name: '',
    player_positions: '',
    potential: 0,
    age: 0,
    overall: 0,
  };
  playerPreferredFoot: string = '';
  playerSkills: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.playerId = id;
    this.getOnePlayer();
  }

  getOnePlayer() {
    this.playersService.getOnePlayer(this.playerId).subscribe({
      next: (result) => {
        this.player = result;
        this.playerPreferredFoot =
          result.preferred_foot === 'Right' ? 'Derecha' : 'Izquierda';
        this.playerSkills = [
          result.pace,
          result.shooting,
          result.passing,
          result.dribbling,
          result.defending,
          result.physic,
        ];
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
