import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html'
})

export class MessageComponent implements OnInit,OnDestroy {
    public msg:string;
    constructor() { }

    ngOnInit():void { this.msg=localStorage.getItem('message')}

    ngOnDestroy():void{
        localStorage.removeItem('message');
    }

}