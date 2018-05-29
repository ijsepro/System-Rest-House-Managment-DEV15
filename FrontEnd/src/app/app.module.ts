import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

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
import { LocationtypeComponent } from './locationtype/locationtype.component';
import { HttpClientModule } from "@angular/common/http";
import { UploadimageComponent } from "./uploadimage/uploadimage.component";
import { ViewresthouseComponent } from "./viewresthouse/viewresthouse.component";
import { AddresthouseComponent } from "./addresthouse/addresthouse.component";
import { ServiceComponent } from './service/service.component';
import { AddcityService } from "./service/addcity.service";
import { AddresthouseService } from "./service/addresthouse.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ViewlocationComponent,
      AddcityComponent,
      LocationtypeComponent,
      UploadimageComponent,
      ViewresthouseComponent,
      AddresthouseComponent,
      ServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
      HttpClientModule
  ],
  providers: [
       AddcityService,
      AddresthouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
