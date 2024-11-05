import { Routes } from '@angular/router';
import { ShowPlayersComponent } from './core/show-players/show-players.component';

export const routes: Routes = [
  {
    path: 'players',
    component: ShowPlayersComponent,
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
