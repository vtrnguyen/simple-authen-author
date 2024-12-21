import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Users } from '../../../types/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'manage_user-page',
  templateUrl: './manage_user.component.html',
  styleUrl: './manage_user.component.scss'
})

export class ManageUserInfor {
  private users: Users[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
