import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  constructor(
    private messengerService: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartITems();
  }

  handleSubscription() {
    this.messengerService
      .getMsgAddProductToCart()
      .subscribe((product: Product) => {
        this.loadCartITems();
      });
  }

  loadCartITems() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
