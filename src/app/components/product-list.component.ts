import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
	selector: 'product-list',
	templateUrl: '../views/product-list.html',
	providers: [ProductService]
})

export class ProductListComponent {

	public title: string;
	productList:any;
	
	constructor(private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService){
		this.title = 'Product list';
	}

	ngOnInit(){
		this.getProductList();
	}


	getProductList(){
		this._productService.getProductList().subscribe(response => {
			this.productList = response;
        });
	}

	deleteProduct(id: number){
		this._productService.deleteProduct(id).subscribe(response => {
			console.log(response);
			this.getProductList();
        });
	}

}