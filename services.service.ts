import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from './model/Jwt';

const BASE_URL = ["http://localhost:8081/api/auth/"]
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = ""

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL + 'register',signRequest)
  }

  login(loginRequest: any): Observable<Jwt>{
    return this.http.post<Jwt>(BASE_URL + 'authentication', loginRequest)
  }
  hello(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(BASE_URL + 'demo', { headers });
  }

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }

}
