import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css'],
})
export class PaymentSummaryComponent implements OnInit {
  cart: any = {};
  cartTotal = 0;
  Tax = 0;
  subTotal = 0;

  constructor(
    private cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.loadCartITems();
    this.handleSubscription();
  }

  handleSubscription() {
    this.messengerService.getMsgCartTotal().subscribe(() => {
      this.loadCartITems();
    });
  }

  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.cartTotal = this.cartService.calculateCartTotal(this.cart);
    this.Tax = this.cartService.calculateTax(this.cartTotal);
    this.subTotal = this.cartService.calculateSubtotal(
      this.cartTotal,
      this.Tax
    );
  }
}
