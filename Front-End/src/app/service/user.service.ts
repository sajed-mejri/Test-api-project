import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    endpoint = "users/";

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: "response" as 'body'
    };

    constructor(private httpClient: HttpClient) {
    }

    login(login: string, password: string): Observable<any> {
        var url = environment.appRoot + "auth/login";
        var model = new LoginModel();
        model.username = login;
        model.password = password;
        return this.httpClient.post(url, model,this.httpOptions)      
                              .pipe(map((response: any) => this.ReturnResponseData(response)),
                                                           catchError(this.handleError));
    }

    private ReturnResponseData(response: any) {
        return response;
    }
    
    private handleError(error: any) {
        return throwError(error);
    }


}