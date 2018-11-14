import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from '../../../models/user-model/user-model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getCustomerList();
  }

  showForEdit(customer: CustomerModel) {
    this.userService.selectedCustomer = Object.assign({}, customer);;
  }

  onDelete(customerID: number) {
    if (confirm('Are you sure to delete this record ?') == true) {    

      this.userService.deleteCustomer(customerID)
      .subscribe(x => {
        this.userService.getCustomerList();
        this.toastr.warning("Deleted Successfully","Customer Registration");
      })
    }
  }

}
