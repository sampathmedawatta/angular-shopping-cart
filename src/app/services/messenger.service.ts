import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  constructor() {}

  sendMsgAddProductToCart() {
    this.subject.next();
  }

  getMsgAddProductToCart() {
    return this.subject.asObservable();
  }

  sendMsgUpdateProductInCart() {
    this.subject.next();
  }

  getMsgUpdateProductInCart() {
    return this.subject.asObservable();
  }

  sendMsgRemoveProductFromCart() {
    this.subject.next();
  }

  getMsgRemoveProductFromCart() {
    return this.subject.asObservable();
  }

  getMsgRemoveCart() {
    return this.subject.asObservable();
  }

  sendMsgRemoveCart() {
    this.subject.next();
  }

  sendMsgCartTotal() {
    this.subject.next();
  }

  getMsgCartTotal() {
    return this.subject.asObservable();
  }

  sendMsgAddToWishList() {
    this.subject.next();
  }

  getMsgAddToWishList() {
    return this.subject.asObservable();
  }

  sendMsgUserLogin() {
    this.subject.next();
  }

  getMsgUserLogin() {
    return this.subject.asObservable();
  }

  sendMsgUserLogout() {
    this.subject.next();
  }

  getMsgUserLogout() {
    return this.subject.asObservable();
  }
}
