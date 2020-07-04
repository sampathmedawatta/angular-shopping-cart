import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
