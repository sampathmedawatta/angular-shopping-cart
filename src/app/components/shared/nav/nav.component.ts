import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  cartItems = [];
  wishlist = [];

  isLoggedIn: boolean = false;
  constructor(
    private messengerService: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkAuthantication();
    this.handleSubscription();

    this.cartItems = this.cartService.getCartItems();
    this.wishlist = this.wishlistService.getWishlist();
  }

  handleSubscription() {
    this.messengerService.getMsgUserLogin().subscribe(() => {
      this.checkAuthantication();
    });
    this.messengerService.getMsgUserLogout().subscribe(() => {
      this.checkAuthantication();
    });

    this.messengerService.getMsgAddProductToCart().subscribe(() => {
      this.cartItems = this.cartService.getCartItems();
    });

    this.messengerService.getMsgAddToWishList().subscribe(() => {
      this.wishlist = this.wishlistService.getWishlist();
    });

    this.messengerService.getMsgRemoveCart().subscribe(() => {
      this.cartItems = this.cartService.getCartItems();
    });
  }
  checkAuthantication() {
    if (localStorage.getItem('token') != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.authService.logout();
  }
}
