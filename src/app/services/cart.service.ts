import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  locatCartItems: CartItem[] = [];
  cartTotal = 0;
  tax = 0;
  taxRate = 0.1;

  constructor() {}

  getCartItems() {
    this.getLocalCart();
    return this.locatCartItems;
  }

  addProductToCart(product: Product, qty: number) {
    this.getLocalCart();
    this.createCart(product, qty);
  }

  updateCartItemQty(cartItem: CartItem) {
    this.getLocalCart();
    this.updateCart(cartItem);
  }

  createCart(product: Product, qty: number) {
    let productExist = false;

    for (let i in this.locatCartItems) {
      if (this.locatCartItems[i].productId === product.id) {
        this.locatCartItems[i].qty = this.locatCartItems[i].qty + qty;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.locatCartItems.push(new CartItem(product, qty));
    }
    this.setLocalCart();
  }

  updateCart(cartItem: CartItem) {
    for (let i in this.locatCartItems) {
      if (this.locatCartItems[i].productId === cartItem.productId) {
        this.locatCartItems[i].qty = cartItem.qty;
        break;
      }
    }

    this.setLocalCart();
  }

  checkProductIsExist() {
    //TODO check product availability befor checkout
  }

  getLocalCart() {
    let cart = localStorage.getItem('cart');
    if (cart) {
      this.locatCartItems = JSON.parse(cart);
    }
  }

  setLocalCart() {
    localStorage.setItem('cart', JSON.stringify(this.locatCartItems));
  }

  removeCartItem(cartItem: CartItem) {
    this.getLocalCart();

    if (this.locatCartItems) {
      this.locatCartItems = this.locatCartItems.filter(
        ({ productId }) => productId !== cartItem.productId
      );

      this.setLocalCart();
    }
  }

  removeCart() {
    console.log();
    localStorage.removeItem('cart');
  }
  calculateCartTotal(cartItems: CartItem[]) {
    this.cartTotal = 0;
    cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
    return this.cartTotal;
  }

  calculateTax(cartTotal: number) {
    this.tax = cartTotal * this.taxRate;
    return this.tax;
  }

  calculateSubtotal(cartTotal: number, tax: number) {
    return cartTotal + tax;
  }
}
