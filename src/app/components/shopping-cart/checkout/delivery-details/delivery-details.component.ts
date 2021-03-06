import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/order-item';
import { OrderService } from 'src/app/services/order.service';
import { OperationResult } from 'src/app/models/operation-result';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css'],
})
export class DeliveryDetailsComponent implements OnInit {
  orderItems: OrderItem[];
  order: Order;
  paymentMethod = '5771E231-BACE-44CB-80E2-2DB0802CB29F';
  orderDetails = {
    totalAmount: 0,
    subTotal: 0,
    tax: 0,
  };

  userModel: User = {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    postCode: '',
  };

  //TODO load payment method from API
  paymentMethodList = [
    {
      id: '5771E231-BACE-44CB-80E2-2DB0802CB29F',
      name: 'Credit Card',
      description: 'Credit Card',
    },
    {
      id: '538754B4-5DD5-4437-992B-BB74649D9E61',
      name: 'Pay At Delivery',
      description: 'Pay At Delivery',
    },
  ];

  termsConditions = {
    isAggreed: '',
  };

  isErrored: boolean = false;
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  loggedInErrorMessage: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.userModel = JSON.parse(user);
    } else {
      this.isLoggedIn = false;
      this.loggedInErrorMessage =
        'Please Sign up or Register before placed the order. ';
    }
  }

  checkout() {
    this.setPaymentDetails();
    if (this.orderDetails.totalAmount > 0) {
      this.order = new Order(
        this.orderDetails,
        this.userModel,
        this.orderItems,
        this.paymentMethod
      );
      this.saveOrder();
    } else {
      //TODO show error order amount can not be zero
      this.isErrored = true;
      this.errorMessage =
        'Order amount can not be zero! Please add items to cart.';
    }
  }

  saveOrder() {
    this.orderService.placeOrder(this.order).subscribe({
      next: (result: OperationResult) => {
        if (result.statusId == 200 && result.data != null) {
          this.cartService.removeCart();
          this.messengerService.sendMsgRemoveCart();
          this.router.navigateByUrl(
            '/checkout/order-confirmation/' + result.data
          );
        } else {
          console.error('Something went Wrong!');
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  setPaymentDetails() {
    this.orderItems = this.cartService.getCartItems();
    this.orderDetails.totalAmount = this.cartService.calculateCartTotal(
      this.orderItems
    );
    this.orderDetails.tax = this.cartService.calculateTax(
      this.orderDetails.totalAmount
    );
    this.orderDetails.subTotal = this.cartService.calculateSubtotal(
      this.orderDetails.totalAmount,
      this.orderDetails.tax
    );
  }
}
