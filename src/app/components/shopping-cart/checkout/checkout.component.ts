import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cart: any = {};
  cartTotal = 0;
  Tax = 0;
  subTotal = 0;

  constructor(
    private cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartITems();
  }
  handleSubscription() {
    this.messengerService.getMsgRemoveProductFromCart().subscribe(() => {
      this.loadCartITems();
    });
  }
  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.cartTotal = this.cartService.calculateCartTotal(this.cart);
  }

  handlerRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    this.messengerService.sendMsgRemoveProductFromCart();
    this.loadCartITems();
  }
}
