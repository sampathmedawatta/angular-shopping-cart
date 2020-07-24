import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

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
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuthantication();

    this.messengerService.getMsgUserLogin().subscribe(() => {
      this.checkAuthantication();
    });
    this.messengerService.getMsgUserLogout().subscribe(() => {
      this.checkAuthantication();
    });

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

  checkAuthantication() {
    if (localStorage.getItem('token') != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.messengerService.sendMsgUserLogout();
    this.router.navigate(['/login']);
  }
}
