import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { BotonService } from '../../../services/boton/boton.service';
import { AuthHttpError } from 'angular2-jwt';

@Component({
    selector: 'app-boton',
    templateUrl: 'boton.component.html',
    providers: [BotonService]
})

export class BotonComponent implements OnInit {
    botones: Array<any> = new Array();
    padre_control: any;
    user: any;
    @Input('key') key: any;
    constructor(private router: Router,
        private botonService: BotonService,
        private authService: AuthService) { }

    ngOnInit() {
        let padre_control_local = localStorage.getItem('padre_control');
        this.padre_control = JSON.parse(padre_control_local);
        this.botonBuild();
    }

    public cargarUrl(value: any): void {
        if (this.key) {
            console.log(this.key);
            this.router.navigate([value, this.key]);
        } else {
            this.router.navigate([value]);
        }

    }

    public getUser_local(value: any): void {

        this.padre_control = value;
        localStorage.setItem('padre_control', JSON.stringify(this.padre_control));
        this.botonBuild();
    }

    /* public getAuthenticated(value:any): void {
        //console.log(value);
        this.authService.getAuthenticated().subscribe(
            user => {
                this.padre_control=value;
                this.user = user['user'];
                this.botonBuild();
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    } */

    public botonBuild(): void {
        let user_local = localStorage.getItem('user');
        this.user = JSON.parse(user_local);
        this.botonService.getBoton(this.user.rol_id).subscribe(
            botones => {
                this.botones = botones['data'][0].controles;
                console.log(this.botones);
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/panel']);
                }
            }
        );

    }
}