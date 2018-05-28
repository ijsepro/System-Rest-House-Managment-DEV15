import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class InstrumentService {

   // private url= 'http://jsonplaceholder.typicode.com/instrument';
    private url= 'http://localhost/playground/RestHouses/BackEnd/index.php/instrument/';

    constructor(private http: Http) { }

    getinstrument(){
        return this.http.get(this.url);
    }
    createinstrument(post){
        return this.http.post(this.url,JSON.stringify(post));
    }

}
