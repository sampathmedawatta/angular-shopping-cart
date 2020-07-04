import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  constructor() {}

  sendMsgAddProductToCart(product) {
    this.subject.next(product);
  }

  getMsgAddProductToCart() {
    return this.subject.asObservable();
  }

  sendMsgRemoveProductFromCart() {
    this.subject.next();
  }

  getMsgRemoveProductFromCart() {
    return this.subject.asObservable();
  }
}
