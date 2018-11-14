import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
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

  onSubmit(form: NgForm) {

    if (form.value.ID == null) {
      form.value.ID = 0;
      this.userService.postCustomer(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.userService.getCustomerList();
          this.toastr.success('New Record Added Succcessfully', 'Customer Registration');
        })
    }
    else {
      this.userService.putCustomer(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.userService.getCustomerList();
          this.toastr.show('Record Updated Successfully!', 'Customer Registration');
        });
    }
  }
}
