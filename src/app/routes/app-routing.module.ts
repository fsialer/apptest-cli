import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { PageNotFoundComponent } from '../components/pagenotfound/page.notfound.component';
import { AuthGuard } from '../guard/auth_guard.service';
import { PanelComponent } from '../components/template/panel/panel.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserRootComponent } from '../components/user/root/user.root.component';
import { UserListComponent } from '../components/user/user-list/user.list.component';
import { UserAddComponent } from '../components/user/user-add/user.add.component';



const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path:'panel',
        component:PanelComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full',
                canActivateChild:[AuthGuard]
            },
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivateChild:[AuthGuard]
            },
            {
                path:'usuarios',
                component:UserRootComponent,
                canActivateChild:[AuthGuard],
                children:[
                    {
                        path:'',
                        component:UserListComponent,
                        canActivateChild:[AuthGuard]
                    },
                    {
                        path:'listar',
                        component:UserListComponent,
                        canActivateChild:[AuthGuard]
                    },
                    {
                        path:'agregar',
                        component:UserAddComponent,
                        canActivateChild:[AuthGuard]
                    }
                ]
            },
        ]
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }