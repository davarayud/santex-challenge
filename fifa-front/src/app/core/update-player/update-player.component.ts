import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlayerInterface } from '../../interfaces/player.interface';
import { PlayersService } from '../../service/players.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-player.component.html',
  styleUrl: './update-player.component.scss',
})
export class UpdatePlayerComponent implements OnInit {
  showErrors = false;
  playerId = '';
  playerToUpdate: PlayerInterface = {
    fifa_version: '23',
    fifa_update: '1',
    player_face_url: '',
    long_name: '',
    player_positions: '',
    overall: 0,
    potential: 0,
    age: 0,
  };

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.playerId = id;
    this.getOnePlayer();
  }

  getOnePlayer() {
    this.playerService.getOnePlayer(this.playerId).subscribe({
      next: (result) => {
        this.playerToUpdate = result;
        this.inputPlayer.setValue({
          player_face_url: this.playerToUpdate.player_face_url,
          long_name: this.playerToUpdate.long_name,
          player_positions: this.playerToUpdate.player_positions,
          club_name: this.playerToUpdate.club_name || '',
          nationality_name: this.playerToUpdate.nationality_name || '',
          preferred_foot: this.playerToUpdate.preferred_foot || '',
          skill_moves: this.playerToUpdate.skill_moves || null,
          overall: this.playerToUpdate.overall,
          potential: this.playerToUpdate.potential,
          age: this.playerToUpdate.age,
          pace: this.playerToUpdate.pace || null,
          shooting: this.playerToUpdate.shooting || null,
          passing: this.playerToUpdate.passing || null,
          dribbling: this.playerToUpdate.defending || null,
          defending: this.playerToUpdate.defending || null,
          physic: this.playerToUpdate.physic || null,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  listOfInputs1: {
    formControl: string;
    texto: string;
    type: string;
    error: string;
  }[] = [
    {
      formControl: 'player_face_url',
      texto: 'URL del retrato',
      type: 'url',
      error: 'Ingrese un url valido',
    },
    {
      formControl: 'long_name',
      texto: 'Nombre Completo',
      type: 'text',
      error: 'Debe contener entre 3 y 255 caracteres',
    },
    {
      formControl: 'age',
      texto: 'Edad',
      type: 'number',
      error: 'Es un numero del 12 al 60',
    },
    {
      formControl: 'player_positions',
      texto: 'Posición',
      type: 'text',
      error: 'Debe contener entre 1 y 255 caracteres',
    },
    {
      formControl: 'club_name',
      texto: 'Club',
      type: 'text',
      error: 'Debe contener entre 1 y 255 caracteres',
    },
    {
      formControl: 'nationality_name',
      texto: 'Nacionalidad',
      type: 'text',
      error: 'Debe contener entre 1 y 255 caracteres',
    },
    {
      formControl: 'preferred_foot',
      texto: 'Pierna hábil',
      type: 'text',
      error: 'Debe contener entre 1 y 255 caracteres',
    },
    {
      formControl: 'skill_moves',
      texto: 'Skills (Cantidad de estrellas)',
      type: 'number',
      error: 'Es un numero del 0 al 5',
    },
  ];
  listOfInputs2: {
    formControl: string;
    texto: string;
    type: string;
    error: string;
  }[] = [
    {
      formControl: 'overall',
      texto: 'Habilidad general',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'potential',
      texto: 'Habilidad potencial',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'pace',
      texto: 'Ritmo de juego',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'shooting',
      texto: 'Tiro al arco',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'passing',
      texto: 'Pase',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'dribbling',
      texto: 'Regate',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'defending',
      texto: 'Defensa',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
    {
      formControl: 'physic',
      texto: 'Físico',
      type: 'number',
      error: 'Es un numero del 0 al 99',
    },
  ];

  inputPlayer = new FormGroup({
    player_face_url: new FormControl('', [
      Validators.required,
      Validators.pattern(/https?:\/\/\S+\.\S+/),
    ]),
    long_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
    player_positions: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    club_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    nationality_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    preferred_foot: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    skill_moves: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(5),
    ]),
    overall: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    potential: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(12),
      Validators.max(60),
    ]),
    pace: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    shooting: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    passing: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    dribbling: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    defending: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    physic: new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
  });

  onSubmit() {
    if (this.inputPlayer.invalid) {
      this.showErrors = true;
    } else {
      const inputs = this.inputPlayer.value;
      this.playerToUpdate = {
        fifa_version: this.playerToUpdate.fifa_version,
        fifa_update: (Number(this.playerToUpdate.fifa_update) + 1).toString(),
        player_face_url: inputs.player_face_url || '',
        long_name: inputs.long_name || '',
        player_positions: inputs.player_positions || '',
        club_name: inputs.club_name || '',
        nationality_name: inputs.nationality_name || '',
        preferred_foot: inputs.preferred_foot || '',
        skill_moves: inputs.skill_moves || 0,
        overall: inputs.overall || 0,
        potential: inputs.potential || 0,
        age: inputs.age || 0,
        pace: inputs.pace || 0,
        shooting: inputs.shooting || 0,
        passing: inputs.passing || 0,
        dribbling: inputs.dribbling || 0,
        defending: inputs.defending || 0,
        physic: inputs.physic || 0,
      };

      this.playerService
        .updatePlayer(this.playerId, this.playerToUpdate)
        .subscribe({
          next: (result) => {
            this.router.navigate([`/players/${result.id}`]);
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
}
