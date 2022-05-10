import { Account } from './account';
export class CustomerEdit {
	constructor(
		public id: number,
		public names: string,
		public surname: string,
		public phone: string,
		public address: string,
		public account: Account
	){}
}