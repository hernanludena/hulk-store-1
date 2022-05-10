import { Account } from './account';
export class Customer {
	constructor(
		public names: string,
		public surname: string,
		public phone: string,
		public address: string,
		public account: Account
	){}
}