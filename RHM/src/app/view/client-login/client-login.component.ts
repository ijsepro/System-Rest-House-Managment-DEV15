import { Component, OnInit } from '@angular/core';
// import {CustomerService} from '../../service/customer.service';
// import {Customer} from '../../model/customer';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
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
