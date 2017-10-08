import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-user-add',
    templateUrl: 'user.add.component.html'
})

export class UserAddComponent implements OnInit {
    constructor(private router: Router,
    private _location:Location) { }

    ngOnInit() { }

    public regresar(){
        this._location.back();
    }
}