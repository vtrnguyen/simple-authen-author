import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root',
})

export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const requiredRole = route.data['roleID'];
        const roleID = this.authService.getDetailUserInfor('role_id');

        if (!Boolean(this.authService.getDetailUserInfor('is_authenticated'))) {
            this.router.navigate(['login']);
            return false;
        }

        if (requiredRole && requiredRole !== roleID) {
            this.router.navigate(['unauthorized']);
            return false;
        }

        return true;
    }
}
