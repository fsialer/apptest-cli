import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { Rol } from '../../models/rol';
import { apiGobal } from '../../core/_helper';

@Injectable()
export class RolService {
    private _apiUrl = apiGobal.url;
    private _headers = new Headers;

    constructor(public authHttp: AuthHttp) {
        this._headers.append('Content-type', 'application/x-www-form-urlencoded');
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    getRoles(): Observable<Rol[]> {
        return this.authHttp.get(`${this._apiUrl}roles`)
            .map((response) => response.json()).catch(this.handleError);
    }

    getRol(id: number | string): Observable<Rol[]> {
        return this.authHttp.get(`${this._apiUrl}roles/${id}`)
            .map((response) => response.json()).catch(this.handleError);
    }
    createRol(user: Rol): Observable<any> {
        return this.authHttp.post(`${this._apiUrl}roles`, this._parseUser(user))
            .map((response) => response.json())
            .catch(this.handleError);
    }

    updateRol(rol: Rol): Observable<Rol[]> {
        return this.authHttp.put(`${this._apiUrl}roles/${rol.id}`, this._parseUser(rol))
            .map((response) => response.json()).catch(this.handleError);
    }
    
    deleteRol(id: number | string): Observable<any> {
        return this.authHttp.delete(`${this._apiUrl}roles/${id}`)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(error);
    }

    private _parseUser(user: any) {
        return Object.keys(user).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(user[k])}`).join('&');
    }
}