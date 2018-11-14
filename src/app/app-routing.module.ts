import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import * as fromCustomers from 'src/app/components/user/index';
import {AppComponent} from 'src/app/app.component';
import {UserComponent} from 'src/app/components/user/user.component';
const routes: Routes = [
  {
    path: 'customers',
    component: UserComponent
  },
  {
    path: 'tool',
    component: fromCustomers.CustomerToolComponent
  }
];

@NgModule({
  
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
