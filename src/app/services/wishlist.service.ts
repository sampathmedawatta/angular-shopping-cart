import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishlistItems: Guid[] = [];
  constructor() {}
  getWishlist() {
    this.getLocalWishlist();
    return this.wishlistItems;
  }

  addWishlist(productId: Guid) {
    let productNotExist = true;
    this.getLocalWishlist();

    for (let i in this.wishlistItems) {
      if (this.wishlistItems[i] === productId) {
        this.removeFromLocalWishlist(productId);
        productNotExist = false;
        break;
      }
    }

    if (productNotExist) {
      this.wishlistItems.push(productId);
      this.setLocalWishlist();
    }
    return productNotExist;
  }

  removeFromWishlist(productId: Guid) {
    this.getLocalWishlist();
    this.removeFromLocalWishlist(productId);
  }

  getLocalWishlist() {
    let wishlist = localStorage.getItem('wishlist');
    if (wishlist) {
      this.wishlistItems = JSON.parse(wishlist);
    }
  }
  setLocalWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems));
  }

  removeFromLocalWishlist(productId: Guid) {
    if (this.wishlistItems) {
      const index: number = this.wishlistItems.indexOf(productId);
      this.wishlistItems.splice(index, 1);

      this.setLocalWishlist();
    }
  }
}
