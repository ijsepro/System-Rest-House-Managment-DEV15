import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {AddresthouseService} from "../service/addresthouse.service";

@Component({
    selector: 'app-addresthouse',
    templateUrl: './addresthouse.component.html',
    styleUrls: ['./addresthouse.component.css']
})
export class AddresthouseComponent implements OnInit{
    addresthouse:any[];
    private url = 'http://jsonplaceholder.typicode.com/addresthouse';
    constructor(private service:AddresthouseService) {
        // service.createResthouse(this.url)
        //     .subscribe(response => {
        //     this.addresthouse = response.json();
        //     });
    }

    ngOnInit() {
        this.service.getaddresthouse()
            .subscribe(response =>{
                this.addresthouse = response.json();
            });
    }


    }

