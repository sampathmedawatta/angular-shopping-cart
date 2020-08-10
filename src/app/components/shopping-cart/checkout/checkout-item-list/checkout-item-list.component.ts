import { Component, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-checkout-item-list',
  templateUrl: './checkout-item-list.component.html',
  styleUrls: ['./checkout-item-list.component.css'],
})
export class CheckoutItemListComponent implements OnInit {
  cart: any = {};
  cartTotal = 0;
  isErrored: boolean = false;
  errorMessage: string = '';

  constructor(
    private cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartITems();

    this.messengerService.sendMsgCartTotal();
  }

  handleSubscription() {
    this.messengerService.getMsgRemoveProductFromCart().subscribe(() => {
      this.loadCartITems();
    });
  }

  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.cartTotal = this.cartService.calculateCartTotal(this.cart);
    if (this.cartTotal <= 0) {
      this.isErrored = true;
      this.errorMessage = 'Cart is empty. Please add items to cart. ';
    }
  }

  handlerRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    this.messengerService.sendMsgRemoveProductFromCart();
    this.messengerService.sendMsgCartTotal();
  }

  setItemQty(cartItem: CartItem) {
    this.updateItemQry(cartItem);
  }

  updateItemQry(cartItem: CartItem) {
    this.cartService.updateCartItemQty(cartItem);
    this.messengerService.sendMsgUpdateProductInCart();
    this.messengerService.sendMsgCartTotal();
  }
}
