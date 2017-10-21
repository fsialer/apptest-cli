import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
/* import { AUTH_PROVIDERS } from 'angular2-jwt'; */
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
/* import { Logger } from 'angular2-logger/core'; */ // ADD THIS

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
      tokenName: 'id_token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [
        {
          'Content-type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }
      ],
    }), http, options);
  }

  @NgModule({
    providers: [
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http, RequestOptions]
      }
    ]
  })

  export class AuthModule{}