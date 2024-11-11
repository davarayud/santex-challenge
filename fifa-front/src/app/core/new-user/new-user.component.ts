import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NewUserInterface } from '../../interfaces/newuser.interface';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent {
  userToCreate: NewUserInterface = {
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  error = {
    show: false,
    msg: '*Todos los campos son obligatorios y el email debe ser valido',
  };

  listOfInputs: { formControl: string; texto: string; type: string }[] = [
    { formControl: 'username', texto: 'Nombre de Usuario', type: 'text' },
    { formControl: 'name', texto: 'Nombre', type: 'text' },
    { formControl: 'surname', texto: 'Apellido', type: 'text' },
    { formControl: 'email', texto: 'E-mail', type: 'email' },
    { formControl: 'password', texto: 'Password', type: 'password' },
  ];

  inputForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    if (!this.inputForm.invalid) {
      const inputValue = this.inputForm.value;
      if (inputValue.username) this.userToCreate.username = inputValue.username;
      if (inputValue.name) this.userToCreate.name = inputValue.name;
      if (inputValue.surname) this.userToCreate.surname = inputValue.surname;
      if (inputValue.email) this.userToCreate.email = inputValue.email;
      if (inputValue.password) this.userToCreate.password = inputValue.password;
      this.userService.createUser(this.userToCreate).subscribe({
        next: (result) => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.error.show = true;
        },
      });
    }
  }
}
