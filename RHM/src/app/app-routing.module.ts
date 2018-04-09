import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminloginComponent} from './view/adminlogin/adminlogin.component';
import {AdminsignupComponent} from './view/adminsignup/adminsignup.component';
import {AdminresetpasswordComponent} from './view/adminresetpassword/adminresetpassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent },
  { path: 'adminresetpassword', component: AdminresetpasswordComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


// const routes: Routes = [
//   {
//     path: 'adminlogin',
//     component: AdminloginComponent
//   },
//   {
//     path: '',
//     redirectTo: '/adminlogin',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     redirectTo: '/adminlogin',
//     pathMatch: 'full'
//   }
// ];
//
// @NgModule({
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule { }


