import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'app-panel',
    templateUrl: 'panel.component.html',
})

export class PanelComponent implements OnInit {
    @ViewChild(MenuComponent) private menuComponent:MenuComponent;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        /* this.createMenu(); */
        this.menuComponent.getAuthenticated();
    }

    private createMenu(): void {
        const factory = this.componentFactoryResolver.resolveComponentFactory(MenuComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}