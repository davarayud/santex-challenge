import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showLogout: UserInterface = { logged: false };
  elementosMenu = [
    { title: 'Jugadores', path: '/players' },
    { title: 'Crear Jugador', path: '/create' },
  ];
  constructor(private loginService: LoginService) {}
}
