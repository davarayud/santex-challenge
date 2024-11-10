import { Routes } from '@angular/router';
import { ShowPlayersComponent } from './core/show-players/show-players.component';
import { ShowOnePlayerComponent } from './core/show-one-player/show-one-player.component';
import { CreatePlayerComponent } from './core/create-player/create-player.component';
import { UpdatePlayerComponent } from './core/update-player/update-player.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './Auth.guard';

export const routes: Routes = [
  {
    path: 'players',
    component: ShowPlayersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'players/:id',
    component: ShowOnePlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreatePlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: UpdatePlayerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
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
