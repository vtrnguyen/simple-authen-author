import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  handleUserLogin(): void {
    if (this.userName && this.password) {
      this.authService.login(this.userName, this.password).subscribe({
        next: (isSuccessful): void => {
          if (!isSuccessful) {
            alert("Username or password is wrong!");
            this.password = '';
            return;
          }
          this.router.navigate(['']);
        },
        error: (): void => {
          console.log("Login failed!");
        }
      });
    }
  }

  handleRegister(): void {

  }

  handleForgotPassword(): void {

  }
}
