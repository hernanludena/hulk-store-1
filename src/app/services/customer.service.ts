import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { CustomerEdit } from '../models/customer-edit';
import { GLOBAL } from './global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class CustomerService {

	public url: string;

	constructor (
		public _http: HttpClient
	){
		this.url = GLOBAL.urlCustomer;
	}

	getCustomerList(){
		return this._http.get(this.url);
	}

	getCustomer(id: any): Observable<CustomerEdit>{
		return this._http.get<CustomerEdit>(this.url + '/' + id);
	}

	addCustomer(customer: any): Observable<Customer> {
		return this._http.post<Customer>(this.url, JSON.stringify(customer), 
			httpOptions).pipe(retry(1), catchError(this.handleError));
	}

	updateCustomer(customer: any): Observable<CustomerEdit> {
		return this._http.put<CustomerEdit>(this.url, JSON.stringify(customer), 
			httpOptions).pipe(retry(1), catchError(this.handleError));
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