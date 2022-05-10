import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: '../views/error.html'
})

export class ErrorComponent {

	public title: string;

	constructor(){
		this.title = "¡Error page!";
	}

	ngOnInit(){
		console.log('Component error.component.ts has been loaded');
	}

}