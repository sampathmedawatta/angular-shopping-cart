import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { OrderService } from 'src/app/services/order.service';
import { OperationResult } from 'src/app/models/operation-result';
import { User } from 'src/app/models/user';
import { PaymentMethod } from 'src/app/models/payment-method';
import { MessengerService } from 'src/app/services/messenger.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  deliveryDetails: User = {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    postCode: '',
  };

  paymentMethod: PaymentMethod = {
    id: null,
    name: '',
    description: '',
  };

  orderItems: any = [];

  order: Order = {
    totalAmount: 0,
    subTotal: 0,
    tax: 0,
    id: null,
    deliveryDetails: this.deliveryDetails,
    orderItems: this.orderItems,
    paymentMethodId: null,
    paymentMethod: this.paymentMethod,
    orderDate: null,
  };

  orderId: Guid;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
      this.getOrderDetails();
      this.messengerService.sendMsgRemoveCart();
    });
  }

  getOrderDetails() {
    this.orderService.getOrderById(this.orderId).subscribe({
      next: (result: OperationResult) => {
        if (result.statusId == 200 && result.data != null) {
          this.order = result.data;
          this.deliveryDetails = result.data.deliveryDetails;
        } else {
          //TODO show error order not found
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
