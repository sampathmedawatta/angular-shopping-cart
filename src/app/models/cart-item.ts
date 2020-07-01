import { Guid } from 'guid-typescript';
import { Product } from './product';
export class CartItem {
  id: Guid;
  productId: Guid;
  productName: string;
  qty: number;
  price: number;

  constructor(product: Product, qty = 1) {
    this.id = Guid.create();
    this.productId = product.id;
    this.productName = product.name;
    this.qty = qty;
    this.price = product.price;
  }
}
