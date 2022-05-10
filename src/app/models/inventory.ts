import { ProductEdit } from './product-edit';
export class Inventory {
	constructor(
		public product: ProductEdit,
		public amount: number,
		public totalCost: number,
		public unitValue: number,
		public dateDurchase: Date
	){}
}