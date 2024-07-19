import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:8081/"]
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/auth/register',signRequest)
  }

  login(loginRequest: any): Observable<any>{
    return this.http.post(BASE_URL + 'api/auth/authentication', loginRequest)
  }

  compte(): Observable<any>{
    return this.http.get(BASE_URL + 'api/controller',{
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader(){
    const jwtToken = localStorage.getItem('jwt');
    if(jwtToken){
      console.log("JWT token found in localStorage ", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer" + jwtToken)
    }else{
      console.log("No JWT token found in localStorage");
    }
    return new HttpHeaders();
  }

}
