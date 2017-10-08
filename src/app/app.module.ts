import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { components } from './components/index';
import { AuthModule } from './auth.module';

import { AuthService } from './services/auth/auth.service';
import { InterceptorXHRBackend } from './services/interceptor/interceptor.service';
import { AuthGuard } from './guard/auth_guard.service';
import { MenuService } from './services/menu/menu.service';

import { MenuPipe } from './pipes/menu.pipe';
import { MenuComponent } from './components/template/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
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
