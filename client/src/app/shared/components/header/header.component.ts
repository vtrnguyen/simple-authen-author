import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }

  redirectToHomePage(): void {
    this.router.navigate(['/']);
  }

  handleUserLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
