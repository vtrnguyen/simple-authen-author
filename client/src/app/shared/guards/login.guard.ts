import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        let isAuthenticated = Boolean(this.authService.getDetailUserInfor('is_authenticated'));
        if (isAuthenticated) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}