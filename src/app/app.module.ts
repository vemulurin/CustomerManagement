import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from '../app/services/user-service.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CustomerToolComponent } from './components/user/customer-tool/customer-tool.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    CustomerToolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(), AppRoutingModule,  
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
