import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AddresthouseService {

    private url = 'http://jsonplaceholder.typicode.com/addresthouse';
    constructor(private http:Http) { }

    getaddresthouse(){
        return this.http.get(this.url);
    }
    createResthouse(post){
        return this.http.post(this.url,JSON.stringify(post));
    }
}
