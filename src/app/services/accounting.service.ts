import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Entrepreneurship } from '../models/entrepreneurship';
import { GLOBAL } from './global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class AccountingService {

	public url: string;

	constructor (
		public _http: HttpClient
	){
		this.url = GLOBAL.urlAccounting;
	}

	getEntrepreneurship(): Observable<Entrepreneurship>{
		return this._http.get<Entrepreneurship>(this.url);
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