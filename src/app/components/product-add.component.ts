import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
	selector: 'product-add',
	templateUrl: '../views/product-add.html',
	providers: [ProductService]
})

export class ProductAddComponent{
	public title: string;
	public product: Product;
	public textButton: string;
	public cancelButton: string;

	constructor(
		private _productService: ProductService,
		private _router: ActivatedRoute,
		private _route: Router
	){
		this.title = "Add a new product";
		this.textButton = "Save";
		this.cancelButton = "Cancel";
		this.product = new Product('', '', '', 0, 0, 'TSHIRT');
	}

	ngOnInit(){
		
	}

	onSubmit(){
		this._productService.addProduct(this.product).subscribe((data: {}) => {
      		this._route.navigate(['/product-list']);
    	});
	}
	
}