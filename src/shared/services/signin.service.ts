import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_GET_USERSIGNIN_URL } from '../constant';
import { IUserSignin } from '../models/userSignin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  getUserData(username: string, password: string): Observable<IUserSignin> {
    const params = { username, password };
    return this.http.get<IUserSignin>(API_GET_USERSIGNIN_URL + "?username=" + username + "&password=" + password);
  }
}
