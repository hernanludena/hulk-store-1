import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
	selector: 'customer-list',
	templateUrl: '../views/customer-list.html',
	providers: [CustomerService]
})

export class CustomerListComponent {

	public title: string;
	customerList:any;
	displayedColumns: string[] = ['username', 'names', 'surname', 'phone', 'action'];
	
	constructor(private _route: ActivatedRoute,
		private _router: Router,
		private _customerService: CustomerService){
		this.title = 'Customer list';
	}

	ngOnInit(){
		this.getCustomerList();
	}


	getCustomerList(){
		this._customerService.getCustomerList().subscribe(response => {
			this.customerList = response;
        });
	}

}