import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_POST_USERS_URL } from '../constant';
import { IUserDetails } from '../models/userDetails';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  postPropertyData(postData: IUserDetails): Observable<IUserDetails> {
    return this.http.post<IUserDetails>(API_POST_USERS_URL, postData);
  }
}
