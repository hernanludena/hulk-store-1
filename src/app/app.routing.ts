import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductEditComponent } from './components/product-edit.component';
import { CustomerListComponent } from './components/customer-list.component';
import { CustomerAddComponent } from './components/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit.component';
import { InventoryComponent } from './components/inventory-store.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'customer-list', component: CustomerListComponent},
	{path: 'customer-add', component: CustomerAddComponent},
	{path: 'customer-edit/:id', component: CustomerEditComponent},
	{path: 'product-list', component: ProductListComponent},
	{path: 'product-add', component: ProductAddComponent},
	{path: 'product-edit/:id', component: ProductEditComponent},
	{path: 'inventory-store', component: InventoryComponent},
	{path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);