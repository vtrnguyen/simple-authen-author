import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { environment } from "../../../environments/environment";
import { AuthInfor } from "../types/login_infor.type";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { isPlatformBrowser } from "@angular/common";
import { DataService } from "./data.service";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private authApi = `${environment.apiUrl}/api/v1/auth`;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private httpClient: HttpClient,
        private dataService: DataService,
    ) { }

    login(userName: string, password: string): Observable<boolean> {
        return this.httpClient.post(`${this.authApi}/login`, { userName, password }).pipe(
            map((response: any) => {
                if (response.status === 200 && response.access_token) {
                    const decodedToken: any = this.getTokenInfor(response.access_token);
                    const userInfor: AuthInfor = {
                        is_authenticated: true,
                        access_token: response.access_token,
                        user_id: decodedToken.id,
                        role_id: decodedToken.roleID,
                        user_name: decodedToken.name,
                    };

                    localStorage.setItem('user_infor', JSON.stringify(userInfor));
                    return true;
                }
                return false;
            }),
            catchError((error) => {
                console.error("Login failed: ", error);
                return throwError(() => error);
            }),
        );
    }

    logout(): void {
        this.removeLoginInfor();
    }

    register(): void {

    }

    getTokenInfor(accessToken: string): any {
        return jwtDecode(accessToken);
    }

    removeLoginInfor(): void {
        localStorage.removeItem('user_infor');
    }

    getDetailUserInfor(chooseType: string): boolean | number | string | null {
        if (isPlatformBrowser(this.platformId)) {
            let userInfor: any = localStorage.getItem('user_infor');
            if (userInfor) {
                let parsedUserInfor: any = JSON.parse(userInfor);
                if (parsedUserInfor.hasOwnProperty(chooseType)) {
                    return parsedUserInfor[chooseType];
                }
            }
        }
        return null;
    }
}
