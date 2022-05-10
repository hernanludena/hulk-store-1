import { ProductEdit } from './product-edit';
export class StockAvailable {
	constructor(
		public product: ProductEdit,
		public amount: number
	){}
}