import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class DataService {
    private isAdmin = new BehaviorSubject<boolean>(false);
    
    isAdmin$ = this.isAdmin.asObservable();

    updateAdminState(adminState: boolean): void {
        this.isAdmin.next(adminState);
    }
}
