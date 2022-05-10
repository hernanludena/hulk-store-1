import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { ProductEdit } from '../models/product-edit';

@Component({
	selector: 'product-edit',
	templateUrl: '../views/product-edit.html',
	providers: [ProductService]
})

export class ProductEditComponent{

	public title: string;
	public textButton: string;
	public product: ProductEdit;
	public cancelButton: string;

	constructor(
		private _productService: ProductService,
		private _router: ActivatedRoute,
		private _route: Router
	){
		this.title = "Edit a new product";
		this.textButton = "Save";
		this.cancelButton = "Cancel";
		this.product = new ProductEdit(0,'', '', '', 0, 0, 'TSHIRT');
	}

	ngOnInit(){
		this.getProduct();
	}

	getProduct(){
		this._router.params.forEach((params: Params) => {
			let id = params['id'];
			this._productService.getProduct(id).subscribe(response => {
				this.product = response;
			});
		});
	}

	onSubmit(){
		this._productService.updateProduct(this.product).subscribe((data: {}) => {
      		this._route.navigate(['/product-list']);
    	});
	}
	
}