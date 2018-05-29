import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {AddcityService} from "../service/addcity.service";

@Component({
    selector: 'app-addcity',
    templateUrl: './addcity.component.html',
    styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
    addcity: any[];
    private url= 'http://jsonplaceholder.typicode.com/addcity';

    constructor(private service: AddcityService) {
        // service.createCity(this.url)
        //     .subscribe(response => {
        //     this.addcity = response.json();
        //     });
    }


    ngOnInit() {
        this.service.getaddcity()
            .subscribe(response =>{
                this.addcity = response.json();
            });
    }

    createCity(id: HTMLInputElement){
        let post: any = {id: id.value};
        id.value = '';
        this.service.createCity(post)
            .subscribe(response => {
                post['id'] = response.json().id;
                this.addcity.splice(0, 0, post);
                console.log(response.json());
            });
    }
}
