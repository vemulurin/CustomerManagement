import { Injectable } from '@angular/core';
import { CustomerModel, DuplicateCustomerModel } from '../models/user-model/user-model'
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedCustomer: CustomerModel = new CustomerModel();
  selectedDuplicateCustomer: CustomerModel = new CustomerModel();
  customerList: CustomerModel[] = [];
  duplicateCustomerList: DuplicateCustomerModel[] = [];
  baseUrl: string = "http://localhost:59422/api/";


  constructor(private http: Http) { }

  getCustomerList() {
    this.http.get(this.baseUrl + 'Customers')
      .subscribe((data: Response) => {
        console.log("CustomerList: " + data);
        this.customerList = data.json() as CustomerModel[];
        return this.customerList;
      })
  }
  postCustomer(user: CustomerModel) {
    var body = JSON.stringify(user);
    console.log("UserList: " + body);

    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.baseUrl + 'AddCustomer', body, requestOptions);
  }

  putCustomer(user) {

    var body = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });

    return this.http.put(this.baseUrl + 'EditCustomer', body, requestOptions);
  }

  deleteCustomer(ID: number) {
    return this.http.delete(this.baseUrl + 'DeleteCustomer/' + ID);
  }


  deleteDuplicateCustomer(customerName: string) {
    return this.http.delete(this.baseUrl + 'DeleteDuplicateCustomers/' + customerName);
  }  

  getDuplicateCustomerList() {
    this.http.get(this.baseUrl + 'DuplicateCustomersByName')
      .subscribe((data: Response) => {
        console.log("DuplicateCustomerList: " + data);
        this.duplicateCustomerList = data.json() as DuplicateCustomerModel[];
        return this.duplicateCustomerList;
      })
  }

  getFirstDuplicateCustomerDetails(customerName) {

    var body = JSON.stringify(customerName);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });

    this.http.get(this.baseUrl + 'GetFirstDuplicateCustomerByName/' + customerName, requestOptions)
      .subscribe((data: Response) => {
        console.log("GetFirstDuplicateCustomerByName: " + data);
        this.selectedDuplicateCustomer = data.json() as CustomerModel;
        return this.selectedDuplicateCustomer;
      })
  }

  putFirstDuplicateCustomer(newFirstName, newLastName, customerName) {
    
    this.getFirstDuplicateCustomerDetails(customerName);
    this.selectedDuplicateCustomer.FirstName = newFirstName;
    this.selectedDuplicateCustomer.LastName = newLastName;

    var body = JSON.stringify(this.selectedDuplicateCustomer);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });


    return this.http.put(this.baseUrl + 'EditFirstDuplicateCustomerByName', body, requestOptions);
  }

}
