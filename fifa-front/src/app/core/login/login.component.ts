import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { UserLoginInterface } from '../../interfaces/userLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userToLogin: UserLoginInterface = { username: '', password: '' };
  error = { show: false, msg: '*Usuario o Contraseña inválidos' };

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    if (!this.loginForm.invalid) {
      const inputValue = this.loginForm.value;
      if (inputValue.username) this.userToLogin.username = inputValue.username;
      if (inputValue.password) this.userToLogin.password = inputValue.password;
      this.loginService.loginUser(this.userToLogin).subscribe({
        next: () => {
          this.router.navigate(['/players']);
        },
        error: (error) => {
          this.error.show = true;
        },
      });
    }
  }
}
