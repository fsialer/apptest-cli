import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { MenuService } from '../../../services/menu/menu.service';
import { AuthHttpError } from 'angular2-jwt';
import { BotonComponent } from '../boton/boton.component';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    public user: any={};
    public num: any = 0;
    public menus: Array<any> = new Array();
    @ViewChild(BotonComponent) private botonComponent:BotonComponent;

    constructor(private router: Router,
        private menuService: MenuService,
        private authService: AuthService) { }

    ngOnInit(): void {
       /*  this.getAuthenticated(); */
    }

    public valor(value: any) {
        console.log(value);
        this.botonComponent.getAuthenticated(value.id);
    }

    public getAuthenticated(): void {
        this.authService.getAuthenticated().subscribe(
            user => {
                this.user = user['user'];
                console.log(this.user);
                this.menuBuild();
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    private menuBuild(): void {
        this.menuService.getNavegador(this.user.rol_id).subscribe(
            menus => {
                this.menus = menus['data'][0].controles;
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/panel']);
                }
            }
        );
    }

}