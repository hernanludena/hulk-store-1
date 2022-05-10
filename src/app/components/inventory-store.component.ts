import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InventoryService } from '../services/inventory.service';
import { AccountingService } from '../services/accounting.service';
import { Inventory } from '../models/inventory';
import { StockAvailable } from '../models/stock-available';
import { Entrepreneurship } from '../models/entrepreneurship';

@Component({
	selector: 'inventory-store',
	templateUrl: '../views/inventory-store.html',
	providers: [InventoryService, AccountingService]
})

export class InventoryComponent{
	public title: string;
	public hulkStore: Entrepreneurship;
	public textStoke: string;
	public textInventory: string;
	public textCapital: string;
	inventoryList:any;
	stokeList:any;
	displayedColumns: string[] = ['product', 'amount'];
	displayedInventoryColumns: string[] = ['product', 'amount', 'dateDurchase', 'unitValue', 'totalCost'];

	constructor(
		private _inventoryService: InventoryService,
		private _accountingService: AccountingService,
		private _router: ActivatedRoute,
		private _route: Router
	){
		this.title = "Store inventory";
		this.textStoke = "Stock available";
		this.textInventory = "Acquired merchandise";
		this.textCapital = "Capital available in store";
		this.hulkStore = new Entrepreneurship(0);
	}

	ngOnInit(){
		this.getInvetoryList();
		this.getStockAvailableList();
		this.getEntrepreneurship()
	}

	getInvetoryList(){
		this._inventoryService.getInvetoryList().subscribe(response => {
			this.inventoryList = response;
        });
	}

	getStockAvailableList(){
		this._inventoryService.getStockAvailableList().subscribe(response => {
			this.stokeList = response;
        });
	}

	getEntrepreneurship(){
		this._accountingService.getEntrepreneurship().subscribe(response => {
			this.hulkStore = response;
        });
	}
	
}