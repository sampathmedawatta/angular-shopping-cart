import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  cartItems = [];
  wishlist = [];
  constructor(
    private messengerService: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.messengerService
      .getMsgAddProductToCart()
      .subscribe((product: Product) => {
        this.cartItems = this.cartService.getCartItems();
      });

    this.messengerService
      .getMsgAddToWishList()
      .subscribe((product: Product) => {
        this.wishlist = this.wishlistService.getWishlist();
      });

    this.cartItems = this.cartService.getCartItems();

    this.wishlist = this.wishlistService.getWishlist();
  }
}
