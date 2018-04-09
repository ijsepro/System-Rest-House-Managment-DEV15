import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminloginComponent } from './view/adminlogin/adminlogin.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { AdminsignupComponent } from './view/adminsignup/adminsignup.component';
import { AdminresetpasswordComponent } from './view/adminresetpassword/adminresetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminsignupComponent,
    AdminresetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



