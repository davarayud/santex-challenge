import { Routes } from '@angular/router';
import { ShowPlayersComponent } from './core/show-players/show-players.component';
import { ShowOnePlayerComponent } from './core/show-one-player/show-one-player.component';

export const routes: Routes = [
  {
    path: 'players',
    component: ShowPlayersComponent,
  },
  {
    path: 'players/:id',
    component: ShowOnePlayerComponent,
  },
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'players',
    pathMatch: 'full',
  },
];
