import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartITems();
  }

  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cart.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
    this.subTotal = this.cartTotal + this.Tax;
  }
}
