import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { PageNotFoundComponent } from '../components/pagenotfound/page.notfound.component';
import { AuthGuard } from '../guard/auth_guard.service';
import { PanelComponent } from '../components/shared/panel/panel.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserRootComponent } from '../components/user/root/user.root.component';
import { UserListComponent } from '../components/user/user-list/user.list.component';
import { UserAddComponent } from '../components/user/user-add/user.add.component';
import { RolRootComponent } from '../components/rol/root/rol.root.component';
import { RolListComponent } from '../components/rol/rol-list/rol.list.component';
import { RolAddComponent } from '../components/rol/rol-add/rol.add.component';
import { RolEditComponent } from '../components/rol/rol-edit/rol.edit.component';
import { RolDeleteComponent } from '../components/rol/rol-delete/rol.delete.component';

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
        path: 'panel',
        component: PanelComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivateChild: [AuthGuard]
            },
            {
                path: 'usuarios',
                component: UserRootComponent,
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: UserListComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'listar',
                        component: UserListComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'agregar',
                        component: UserAddComponent,
                        canActivateChild: [AuthGuard]
                    }
                ]
            },
            {
                path: 'roles',
                component: RolRootComponent,
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'listar',
                        pathMatch: 'full'
                    },
                    {
                        path: 'listar',
                        component: RolListComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'listar/paginated/1',
                        redirectTo: 'listar'
                    },
                    {
                        path: 'listar/paginated/:page',
                        component: RolListComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'agregar',
                        component: RolAddComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'editar/:id',
                        component: RolEditComponent,
                        canActivateChild: [AuthGuard]
                    },
                    {
                        path: 'eliminar/:id',
                        component: RolDeleteComponent,
                        canActivateChild: [AuthGuard]
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
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