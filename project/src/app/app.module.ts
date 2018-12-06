import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './non-protected/login/login.component';
import { DashboradComponent } from './protected-component/dashborad/dashborad.component';
import { HeaderComponent } from './protected-component/header/header.component';
import { FooterComponent } from './protected-component/footer/footer.component';
import { NavBarComponent } from './protected-component/nav-bar/nav-bar.component';
import { AddRentComponent } from './protected-component/rent-user/add-rent/add-rent.component';
import { DeleteRentComponent } from './protected-component/rent-user/delete-rent/delete-rent.component';
import { EditComponent } from './protected-component/rent-user/edit/edit.component';
import { ListComponent } from './protected-component/rent-user/list/list.component';
import { UserDashBoardComponent } from './protected-component/rent-user/user-dash-board/user-dash-board.component';
import { AdminDashboradComponent } from './protected-component/rent-admin/admin-dashborad/admin-dashborad.component';
import { RentAllListComponent } from './protected-component/rent-admin/rent-all-list/rent-all-list.component';
import { UserListComponent } from './protected-component/rent-admin/user-list/user-list.component';
import { UserDeleteComponent } from './protected-component/rent-admin/user-delete/user-delete.component';
import { RentDetailsComponent } from './protected-component/rent-admin/rent-details/rent-details.component';
import { UserDetailsComponent } from './protected-component/rent-admin/user-details/user-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DemoMaterialModule} from './material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboradComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    AddRentComponent,
    DeleteRentComponent,
    EditComponent,
    ListComponent,
    UserDashBoardComponent,
    AdminDashboradComponent,
    RentAllListComponent,
    UserListComponent,
    UserDeleteComponent,
    RentDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,DemoMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
