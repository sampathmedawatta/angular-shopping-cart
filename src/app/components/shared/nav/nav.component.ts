import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  cartItems = [];
  constructor(
    private messengerService: MessengerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.messengerService
      .getMsgAddProductToCart()
      .subscribe((product: Product) => {
        this.cartItems = this.cartService.getCartItems();
      });
    this.cartItems = this.cartService.getCartItems();
  }
}
