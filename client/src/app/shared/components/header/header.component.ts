import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-component',
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  
  redirect(pageType: string): void {
    this.router.navigate([`${pageType}`]);
  }

  handleUserLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
