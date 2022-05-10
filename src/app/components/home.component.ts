import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})
export class HomeComponent {
	public title: string;
	
	constructor(){
		this.title = 'Hulk Store';
	}

	ngOnInit(){
		console.log('Component home.component.ts has been loaded');
	}

}