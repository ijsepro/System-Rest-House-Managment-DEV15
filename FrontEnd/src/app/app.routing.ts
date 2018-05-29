import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {AddcityService} from "./service/addcity.service";
import {AddresthouseService} from "./service/addresthouse.service";

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ViewlocationComponent } from './viewlocation/viewlocation.component';
import { AddcityComponent } from './addcity/addcity.component';
import {LocationtypeComponent } from './locationtype/locationtype.component';
import {UploadimageComponent} from "./uploadimage/uploadimage.component";
import {ViewresthouseComponent} from "./viewresthouse/viewresthouse.component";
import {AddresthouseComponent} from "./addresthouse/addresthouse.component";

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'viewlocation',   component: ViewlocationComponent },
    { path: 'addcity',        component: AddcityComponent },
    { path: 'locationtype',   component: LocationtypeComponent },
    { path:'uploadimage',     component:UploadimageComponent},
    { path:'viewresthouse',   component:ViewresthouseComponent},
    { path:'addresthouse',    component:AddresthouseComponent},
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
