import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import MenuComponent from '../menu/menu.component';

@Component({
    selector: 'app-panel',
    templateUrl: 'panel.component.html',
})

export class PanelComponent implements OnInit {
    public componentData = null;
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void { this.createMenuComponent(); }

    private createMenuComponent() {
        this.componentData = {
            component: MenuComponent,
            inputs: {

            }
        }
    }
}