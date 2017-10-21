import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';
import { Rol } from '../../../models/rol';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthHttpError } from 'angular2-jwt';
import { RolListComponent } from '../rol-list/rol.list.component';

@Component({
    selector: 'app-rol-add',
    templateUrl: 'rol.add.component.html',
    providers:[RolService]
})

export class RolAddComponent implements OnInit {
    public rol:Rol=new Rol();
    constructor(private rolService:RolService,
    private router:Router,
    private _location:Location) { }

    ngOnInit() { }

    public agregarRol():void{
        this.rolService.createRol(this.rol).subscribe(
            rol=>{
                console.log(rol);
                localStorage.setItem('message',rol['message']);
                this._location.back();
            },
            error=>{
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    public regresar(){
        this._location.back();
    }
}