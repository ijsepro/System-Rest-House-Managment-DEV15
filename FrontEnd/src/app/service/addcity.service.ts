import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AddcityService {

  private url = 'http://jsonplaceholder.typicode.com/addcity';
  constructor(private http: Http) { }

  getaddcity(){
  return this.http.get(this.url);
  }
  createCity(post){
      return this.http.post(this.url,JSON.stringify(post));
  }
}
