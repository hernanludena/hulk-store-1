export class ProductEdit {
	constructor(
		public id: number,
		public code: string,
		public names: string,
		public description: string,
		public price: number,
		public cost: number,
		public productType: string
	){

	}
}