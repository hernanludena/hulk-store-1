import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

//Path

import { routing, appRoutingProviders} from './app.routing';

//Components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductEditComponent } from './components/product-edit.component';
import { CustomerListComponent } from './components/customer-list.component';
import { CustomerAddComponent } from './components/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit.component';
import { InventoryComponent } from './components/inventory-store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    routing
  ],
  providers: [
    HttpClientModule,
    appRoutingProviders,
    ProductAddComponent,
    ProductEditComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
