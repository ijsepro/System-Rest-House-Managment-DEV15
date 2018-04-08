import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClientLoginComponent} from "./view/client-login/client-login.component";
import {ForgetPasswordComponent} from "./view/forget-password/forget-password.component";

const routes: Routes = [
  {path : '', redirectTo:'/client-login',pathMatch:'full'},
  {path : 'client-login',component:ClientLoginComponent},
  {path : 'forget-password',component:ForgetPasswordComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
