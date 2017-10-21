import { Component, OnInit } from '@angular/core';
import { Rol } from '../../../models/rol';
import { RolService } from '../../../services/rol/rol.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AuthHttpError } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-rol-edit',
    templateUrl: 'rol.edit.component.html',
    providers: [RolService]
})

export class RolEditComponent implements OnInit {
    public rol: Rol = new Rol();

    constructor(private rolService: RolService,
        private router: Router,
        private _location: Location,
        private route: ActivatedRoute) { }

    ngOnInit() { this.getRol(); }

    public editarRol(): void {
        this.rolService.updateRol(this.rol).subscribe(
            rol => {
                console.log('Se edito');
                localStorage.setItem('message', rol['message']);
                this._location.back();
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    private getRol(): void {
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.rolService.getRol(id).subscribe(
            rol => {
                this.rol = rol['data'];
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );

    }

    public regresar() {
        this._location.back();
    }
}