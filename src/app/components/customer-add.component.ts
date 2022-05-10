import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Account } from '../models/account';
import { Customer } from '../models/customer';

@Component({
	selector: 'customer-add',
	templateUrl: '../views/customer-add.html',
	providers: [CustomerService]
})

export class CustomerAddComponent{
	public title: string;
	public account: Account;
	public customer: Customer;
	public textButton: string;
	public cancelButton: string;

	constructor(
		private _customerService: CustomerService,
		private _router: ActivatedRoute,
		private _route: Router
	){
		this.title = "Register a customer";
		this.textButton = "Save";
		this.cancelButton = "Cancel";
		this.account = new Account('', '');
		this.customer = new Customer('', '', '', '', this.account);
	}

	ngOnInit(){
		
	}

	onSubmit(){
		this._customerService.addCustomer(this.customer).subscribe((data: {}) => {
      		this._route.navigate(['/customer-list']);
    	});
	}
	
}