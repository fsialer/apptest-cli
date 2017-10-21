import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthHttpError } from 'angular2-jwt';
@Component({
    selector: 'app-rol-delete',
    template: 'Cargando..',
    providers: [RolService]
})

export class RolDeleteComponent implements OnInit {
    constructor(private rolService: RolService,
        private router: Router,
        private _location: Location,
        private route: ActivatedRoute) { }

    ngOnInit() { this.eliminarRol();}

    private eliminarRol():void{
        let id = this.route.snapshot.paramMap.get('id');
        this.rolService.deleteRol(id).subscribe(
            rol=>{
                localStorage.setItem('message', rol['message']);
                this._location.back();
            },
            error=>{
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}