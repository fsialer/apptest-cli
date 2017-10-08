import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public user: User = new User();
    constructor(private router: Router,
        private authService: AuthService) { }

    ngOnInit(): void { }

    login(): void {
        this.authService.login(this.user).subscribe(
            (res) => {
                localStorage.setItem('id_token', res['token']);
                this.router.navigate(['panel']);
            },
            (error) => {
                console.log('Fallo');
            }
        );
    }
}