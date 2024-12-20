import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page_not_found-page',
  imports: [
    CommonModule
  ],
  templateUrl: './page_not_found.component.html',
  styleUrl: './page_not_found.component.scss'
})

export class PageNotFoundComponent {
  constructor(private router: Router, private location: Location) { }

  redirectToHomePage(): void {
    this.router.navigate(['']);
  }

  redirectToPreviousPage(): void {
    this.location.back();
  }
}
