import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WebUrl} from "./web-url";
import {Http} from "@angular/http";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})



export class PaymentComponent implements OnInit {
  private packages: string[] = new Array();
  private packageValues: string[] = new Array();
  private events: string[] = new Array();
  private eventValues: string[] = new Array();
  private totalValue: number;

  @ViewChild('selectedEvent') selectedEvent;
  @ViewChild('rdYes') rdYes;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.http.get(WebUrl.getPackageUrl()).subscribe(response => {
      for (let i in response.json()) {
        this.packages.push(response.json()[i].packageName);
        this.packageValues.push(response.json()[i].packageValue);
      }
    })
  }

  loadEvents(elem1: HTMLInputElement) {
    let post = {packageName: elem1.value};
    this.http.post(WebUrl.getEventsUrl(), JSON.stringify(post)).subscribe(response => {
      this.events.length=0;
      this.eventValues.length=0;
      for (let i in response.json()) {
        this.events.push(response.json()[i].eventName);
        this.eventValues.push(response.json()[i].eventValue);
      }
    })
  }

  setTotalNo(elem2: HTMLInputElement) {
    this.totalValue=parseInt(this.eventValues[this.events.indexOf(elem2.value)]);
  }

  setTotalYes(elem2: HTMLInputElement) {
    this.totalValue=parseInt(this.eventValues[this.events.indexOf(elem2.value)])+50;
  }
}
