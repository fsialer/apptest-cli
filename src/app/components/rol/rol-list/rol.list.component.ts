import { Component, OnInit, ViewChild } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';
import { Rol } from '../../../models/rol';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthHttpError } from 'angular2-jwt';
import { RolAddComponent } from '../rol-add/rol.add.component';
import { Location } from '@angular/common';
@Component({
    selector: 'app-rol-list',
    templateUrl: 'rol.list.component.html',
    providers: [RolService]
})

export class RolListComponent implements OnInit {
    public roles: Array<Rol> = new Array();
    public msg: string;
    public key: any;
    public count: number = 0;
    public allItems:any[];
    /* public offset: number = 0; */
    public curPage:number=1;
    public pageSize:number=3;
   /*  public limit: number = 3; */
    public searchText: string;
    /* public _old: number = 0;
    public _new: number = 0; */
    public p: number = 1;
    constructor(private rolService: RolService,
        private router: Router,
        private _location: Location,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.getRoles();
    }

    public seleccionado(id: any): void {
        this.key = id;
        console.log(id);
    }

    private getRoles(): void {

        this.rolService.getRoles().subscribe(
            roles => {
                this.roles = roles['data'];
                this.count = this.roles.length;
                this.allItems=roles['data'];
                console.log(this.allItems);
                //console.log(this.roles.length);
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        );
    }

    /* onPageChange(offset) {
        this.offset = offset;
        this.router.navigate(['/panel/roles/listar/paginated', (offset / this.limit) + 1]);
    } */



}