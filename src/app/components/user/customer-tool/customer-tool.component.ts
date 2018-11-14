import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from '../../../models/user-model/user-model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-tool',
  templateUrl: './customer-tool.component.html',
  styleUrls: ['./customer-tool.component.css']
})
export class CustomerToolComponent implements OnInit {

  oldCustomerName: string;
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.userService.getDuplicateCustomerList();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.userService.selectedCustomer = {
      ID: null,
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: ''
    }
  }
  editFirstCustomer(customer) {

    this.userService.getFirstDuplicateCustomerDetails(customer.CustomerName);
    this.oldCustomerName = customer.CustomerName;
  }

  onDelete(customerName: string) {
    if (confirm('Are you sure to delete this record ?') == true) {

      this.userService.deleteDuplicateCustomer(customerName)
        .subscribe(x => {
          this.userService.getDuplicateCustomerList();
          this.toastr.warning("Deleted Successfully", "Customer Register");
        })
    }
  }

  onSubmit(form: NgForm) {

    this.userService.putFirstDuplicateCustomer(form.value.firstName, form.value.lastName, this.oldCustomerName)
      .subscribe(data => {
        this.resetForm(form);
        this.userService.getDuplicateCustomerList();
        this.toastr.info('Record Updated Successfully!', 'Customer Registraton');
      });
  }
}
