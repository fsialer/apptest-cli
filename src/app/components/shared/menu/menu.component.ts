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

export default class MenuComponent implements OnInit {
    public user: any={};
    public num: any = 0;
    public menus: Array<any> = new Array();
    @ViewChild(BotonComponent) private botonComponent:BotonComponent;

    constructor(private router: Router,
        private menuService: MenuService,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.getAuthenticated();
    }

    public valor(value: any) {
        console.log(value);
        localStorage.setItem('padre_control',JSON.stringify(value.id));
        /* this.botonComponent.getUser_local(value.id); */
    }

    public getAuthenticated(): void {
        if(localStorage.getItem('user')){
            let user_local=localStorage.getItem('user');
            this.user=JSON.parse(user_local);
            this.menuBuild();
            console.log(this.user);
        }else{
            this.authService.getAuthenticated().subscribe(
                user => {
                    this.user = user['user'];
                    localStorage.setItem('user',JSON.stringify(this.user));
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