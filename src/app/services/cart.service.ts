import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  locatCartItems = [];
  constructor() {}

  getCartItems() {
    this.getLocalCart();
    return this.locatCartItems;
  }

  addProductToCart(product: Product) {
    this.getLocalCart();
    this.createCart(product);
  }

  createCart(product: Product) {
    let productExist = false;

    for (let i in this.locatCartItems) {
      if (this.locatCartItems[i].productId === product.id) {
        this.locatCartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.locatCartItems.push(new CartItem(product));
    }
    localStorage.setItem('cart', JSON.stringify(this.locatCartItems));
  }

  getLocalCart() {
    let cart = localStorage.getItem('cart');
    if (cart) {
      this.locatCartItems = JSON.parse(cart);
    }
  }
}
