import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AsideMenuLeftComponent } from './ui/aside-menu/aside-menu-left/aside-menu-left.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AsideMenuContainerComponent } from './ui/aside-menu/aside-menu-container/aside-menu-container.component';
import { AsideMenuItemComponent } from './ui/aside-menu/aside-menu-item/aside-menu-item.component';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavbarHeaderComponent } from './ui/header/navbar-header/navbar-header.component';
import { SearchHeaderComponent } from './ui/header/search-header/search-header.component';
import { DropdownNotificationHeaderComponent } from './ui/header/dropdown-notification-header/dropdown-notification-header.component';
import { DropdownMessageHeaderComponent } from './ui/header/dropdown-message-header/dropdown-message-header.component';
import { DropdownUserHeaderComponent } from './ui/header/dropdown-user-header/dropdown-user-header.component';
import {ROUTES} from './app.routes';
import { AsideMenuComponent } from './ui/aside-menu/aside-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuLeftComponent,
    AsideMenuContainerComponent,
    AsideMenuItemComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarHeaderComponent,
    SearchHeaderComponent,
    DropdownNotificationHeaderComponent,
    DropdownMessageHeaderComponent,
    DropdownUserHeaderComponent,
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
