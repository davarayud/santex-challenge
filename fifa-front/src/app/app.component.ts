import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowPlayersComponent } from './core/show-players/show-players.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShowPlayersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fifa-front';
}
