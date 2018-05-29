import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AddlocationtypeService {

    private url = 'http://jsonplaceholder.typicode.com/addlocationtype';
    constructor(private http: Http) { }

    getaddlocationtype(){
        return this.http.get(this.url);
    }
    createLocationtype(post){
        return this.http.post(this.url,JSON.stringify(post));
    }
}
