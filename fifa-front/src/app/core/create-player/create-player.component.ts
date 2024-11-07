import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlayerInterface } from '../../interfaces/player.interface';
import { PlayersService } from '../../service/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.scss',
})
export class CreatePlayerComponent {
  showErrors = false;

  playerToCreate: PlayerInterface = {
    fifa_version: '23',
    fifa_update: '1',
    player_face_url: '',
    long_name: '',
    player_positions: '',
    overall: 0,
    potential: 0,
    age: 0,
  };

  constructor(private playerService: PlayersService, private router: Router) {}

  listOfInputs1: {
    formControl: string;
    texto: string;
    type: string;
    error: string;
  }[] = [
    {
      formControl: 'fifa_version',
      texto: 'Version de Fifa',
      type: 'text',
      error: 'Campo obligatorio',
    },
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
      formControl: 'skills_curve',
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
    fifa_version: new FormControl('23', [Validators.required]),
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
    skills_curve: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(5),
    ]),
    overall: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    potential: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(12),
      Validators.max(60),
    ]),
    pace: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    shooting: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    passing: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    dribbling: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    defending: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(99),
    ]),
    physic: new FormControl(null, [
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
      this.playerToCreate = {
        fifa_version: inputs.fifa_version || '',
        fifa_update: '1',
        player_face_url: inputs.player_face_url || '',
        long_name: inputs.long_name || '',
        player_positions: inputs.player_positions || '',
        club_name: inputs.club_name || '',
        nationality_name: inputs.nationality_name || '',
        preferred_foot: inputs.preferred_foot || '',
        skill_curve: inputs.skills_curve || 0,
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
      this.playerService.createPlayer(this.playerToCreate).subscribe({
        next: (result) => {
          this.router.navigate([`/players/${result.id}`]);
        },
        error: (error) => {
          console.error(error);
        },
      });
      console.log(this.playerToCreate);
    }
  }
}
