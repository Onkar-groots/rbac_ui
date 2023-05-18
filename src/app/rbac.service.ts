import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
// import { Route } from '@angular/router';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  constructor(private http: HttpClient) { }

  get_data(url:string){
    return this.http.get(`${environment.apiUrl}${url}`);
  }

  save_data(url:string,data:any){
    return this.http.post(`${environment.apiUrl}${url}`,data);
  }
}
