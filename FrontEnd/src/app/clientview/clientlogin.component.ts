import { Component, OnInit } from '@angular/core';
// import {CustomerService} from '../../service/customer.service';
// import {Customer} from '../../model/customer';

@Component({
    selector: 'app-clientlogin',
    templateUrl: './clientlogin.component.html',
    styleUrls: ['./clientlogin.component.css']
})
export class ClientLoginComponent implements OnInit {

    // customers: Customer[] = [];
    //
    // constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.loadAllData();
    }

    loadAllData(): void {

    }

}
