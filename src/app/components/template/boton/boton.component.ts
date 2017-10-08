import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { BotonService } from '../../../services/boton/boton.service';
import { AuthHttpError } from 'angular2-jwt';

@Component({
    selector: 'app-boton',
    templateUrl: 'boton.component.html',
    providers:[BotonService]
})

export class BotonComponent implements OnInit {
    botones:Array<any> = new Array();
    padre_control:any;
    user:any;
    constructor(private router: Router,
        private botonService: BotonService,
        private authService: AuthService) { }

    ngOnInit() { }

    public cargarUrl(value:any):void{
        this.router.navigate([value]);
    }

    public getAuthenticated(value:any): void {
        console.log(value);
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
    }

    public botonBuild():void{
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