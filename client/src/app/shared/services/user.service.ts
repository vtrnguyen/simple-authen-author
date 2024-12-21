import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { Users } from "../types/user.type";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private userApi = `${environment.apiUrl}/api/v1/users`;

    constructor(private httpClient: HttpClient) { }

    getAllUsers(): Observable<Users[]> {
        return this.httpClient.get<Users[]>(`${this.userApi}`);
    }

    getUserByID(userID: number): Observable<Users> {
        return this.httpClient.get<Users>(`${this.userApi}/${userID}`);
    }
}
