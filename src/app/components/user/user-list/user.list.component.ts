import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { AuthHttpError } from 'angular2-jwt';

@Component({
    selector: 'app-user-list',
    templateUrl: 'user.list.component.html',
    providers: [UserService]
})

export class UserListComponent implements OnInit {
    public users: Array<User>;
    constructor(private userService: UserService,
        private router: Router) { }

    ngOnInit() { this.getUsers(); }

    private getUsers(): void {
        this.userService.getUsers().subscribe(
            users => {
                this.users = users['data'];
                console.log(this.users);
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}