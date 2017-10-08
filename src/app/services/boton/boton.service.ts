import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import {apiGobal} from '../../core/_helper';


@Injectable()
export class BotonService {
    private _apiUrl = apiGobal.url;
    private _headers = new Headers;

    constructor(public authHttp: AuthHttp) {
        this._headers.append('Content-type', 'application/x-www-form-urlencoded');
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    getBoton(rol_id: any): Observable<any[]> {
        return this.authHttp.get(`${this._apiUrl}boton/${rol_id}`)
            .map((response) => response.json()).catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(error);
    }

    private _parseUser(user: any) {
        return Object.keys(user).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(user[k])}`).join('&');
    }
}