export class CartModel {
    items: Array<CartItemModel>;
    totalamount: number;
};
export class CartItemModel {
    product: {
        name: string;
        image: string;
        price: number;
    }
    price: number;
    qty: number;
    amount: number;
};
export class ProductModel {
    name: string;
    image: string;
    price: number;
};