import { calculateTotalPrice } from "./util";

class Billing {
	constructor(products, cartItems, tax = 5 ) {
		this.cartItems = cartItems;
		this.tax = tax;
		this.totalWithoutTax = 0
		this.priceDetails = calculateTotalPrice(products, cartItems);
		this.totalWithoutTax = 0;
	}
	getPriceDetails() {
		return this.priceDetails;
	}
	getTotalWithoutTax() {
		return this.totalWithoutTax;
	}
	getPriceAfterDiscount(price, discount, count) {
		let singleDiscount = (discount / 100) * price;
		if (discount > 0) {
			singleDiscount = singleDiscount.toFixed(2);
		}
		let totalDiscount = singleDiscount * count;
		this.totalWithoutTax += price * count - totalDiscount;
		return `$${price * count - totalDiscount}`;
	};
	getTotalTax(){
		return ((this.tax / 100) * this.totalWithoutTax).toFixed(2);
	}

	getTotalBill(){
		return (+this.totalWithoutTax + +this.getTotalTax()).toFixed(2);
	};
}

export default Billing;
