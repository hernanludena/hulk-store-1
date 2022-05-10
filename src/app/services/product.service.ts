import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductEdit } from '../models/product-edit';
import { GLOBAL } from './global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class ProductService {

	public url: string;

	constructor (
		public _http: HttpClient
	){
		this.url = GLOBAL.urlProduct;
	}

	getProductList(){
		return this._http.get(this.url);
	}

	getProduct(id: any): Observable<ProductEdit>{
		return this._http.get<ProductEdit>(this.url + '/' + id);
	}

	addProduct(product: any): Observable<Product> {
		return this._http.post<Product>(this.url, JSON.stringify(product), 
			httpOptions).pipe(retry(1), catchError(this.handleError));
	}

	updateProduct(product: any): Observable<ProductEdit> {
		return this._http.put<ProductEdit>(this.url, JSON.stringify(product), 
			httpOptions).pipe(retry(1), catchError(this.handleError));
	}

	deleteProduct(id: number): Observable<unknown> {
		return this._http.delete(this.url+ '/' + id, httpOptions).pipe(retry(1), catchError(this.handleError));
	}

	// Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}