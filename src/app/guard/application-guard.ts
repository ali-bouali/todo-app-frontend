import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';


@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        public userService: UserServiceService,
        public router: Router
    ) {

    }

    canActivate() {
        if (this.userService.loggedUser && this.userService.loggedUser.id) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
