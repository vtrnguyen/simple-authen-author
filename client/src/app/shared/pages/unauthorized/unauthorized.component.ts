import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'unauthorized-page',
  imports: [
    CommonModule
  ],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss'
})

export class UnauthorizedComponent {
  constructor(private router: Router, private location: Location) { }

  redirectToHomePage(): void {
    this.router.navigate(['']);
  }

  redirectToPreviousPage(): void {
    this.location.back();
  }
}
