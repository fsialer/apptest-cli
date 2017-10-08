import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../models/user';
import { apiGobal } from '../../core/_helper';

@Injectable()
export class AuthService {
    private _apiUrl = apiGobal.url;
    private _headers = new Headers;

    constructor(private _http: Http, private authHttp: AuthHttp) {
        this._headers.append('Content-type', 'application/x-www-form-urlencoded');
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    public login(user: User): Observable<User> {
        return this._http.post(`${this._apiUrl}login`, this._parseUser(user),{headers:this._headers})
            .map((response) => response.json()).catch(this.handleError);
    }

    public getAuthenticated(): Observable<any[]> {
        return this.authHttp.get(`${this._apiUrl}authenticated`)
            .map((response) => response.json()).catch(this.handleError);
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

    public tokenSubscription() {
        this.authHttp.tokenStream
        .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Complete')
        );
    }

    public loggedIn() {
        return tokenNotExpired('id_token');
    }
}