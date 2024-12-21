import { Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { HomeComponent } from './shared/pages/user/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { PageNotFoundComponent } from './shared/pages/page_not_found/page_not_found.component';
import { UnauthorizedComponent } from './shared/pages/unauthorized/unauthorized.component';
import { ManageUserInfor } from './shared/pages/admin/manage_user/manage_user.component';
import { AboutComponent } from './shared/pages/about/about.component';

export const routes: Routes = [
    { path: 'login', title: 'Login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: '', title: 'Origin Dev', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'admin', title: 'Admin', component: ManageUserInfor, canActivate: [RoleGuard], data: { roleID: 'R0' } },
    { path: 'unauthorized', title: 'Unauthorized User', component: UnauthorizedComponent },
    { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];
