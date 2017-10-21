import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { components } from './components/index';
import { AuthModule } from './modules/auth/auth.module';

import { AuthService } from './services/auth/auth.service';
import { InterceptorXHRBackend } from './services/interceptor/interceptor.service';
import { AuthGuard } from './guard/auth_guard.service';
import { MenuService } from './services/menu/menu.service';

import { MenuPipe } from './pipes/menu.pipe';
import  MenuComponent  from './components/shared/menu/menu.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PaginationService } from './services/pagination/pagination.service';
import { PaginationModule } from './modules/pagination/pagination.module';



@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    PaginationModule
  ],
  providers: [
    { provide: XHRBackend, useClass: InterceptorXHRBackend },
    AuthService,
    AuthGuard,
    MenuService],
    entryComponents: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
