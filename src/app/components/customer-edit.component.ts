import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CustomerService } from '../services/customer.service';
import { Account } from '../models/account';
import { CustomerEdit } from '../models/customer-edit';

@Component({
	selector: 'customer-edit',
	templateUrl: '../views/customer-edit.html',
	providers: [CustomerService]
})

export class CustomerEditComponent{

	public title: string;
	public textButton: string;
	public account: Account;
	public customer: CustomerEdit;
	public cancelButton: string;

	constructor(
		private _customerService: CustomerService,
		private _router: ActivatedRoute,
		private _route: Router
	){
		this.title = "Edit customer data";
		this.textButton = "Save";
		this.cancelButton = "Cancel";
		this.account = new Account('', '');
		this.customer = new CustomerEdit(0,'','','','', this.account);
	}

	ngOnInit(){
		this.getCustomer();
	}

	getCustomer(){
		this._router.params.forEach((params: Params) => {
			let id = params['id'];
			this._customerService.getCustomer(id).subscribe(response => {
				this.customer = response;
			});
		});
	}

	onSubmit(){
		this._customerService.updateCustomer(this.customer).subscribe((data: {}) => {
      		this._route.navigate(['/customer-list']);
    	});
	}
	
}