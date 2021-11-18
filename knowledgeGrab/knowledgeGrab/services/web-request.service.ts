import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

constructor(private http:HttpClient) {
this.ROOT_URL='http://localhost:3000';

   }

get(url:string){
this.http.get(`${this.ROOT_URL}/${url}`);

}
post(url:string, payload:object){
  return this.http.post(`${this.ROOT_URL}/${url}`,payload);

}

}
