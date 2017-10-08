import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-user',
    template: '<router-outlet></router-outlet>'
})

export class UserRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}