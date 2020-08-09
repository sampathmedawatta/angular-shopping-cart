import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { OrderService } from 'src/app/services/order.service';
import { OperationResult } from 'src/app/models/operation-result';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  order = Order;
  orderId: Guid;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = params.id;
      this.getOrderDetails();
    });
  }

  getOrderDetails() {
    this.orderService
      .getOrderById(this.orderId)
      .subscribe((result: OperationResult) => {
        this.order = result.data;
      });

    // this.orderService.getOrderById(this.orderId).subscribe({
    //   next: (result: OperationResult) => {
    //     if (result.statusId == 200 && result.data != null) {
    //       console.log('result ' + result);
    //     } else {
    //       //TODO show error order not found
    //     }
    //   },
    //   error: (error) => {
    //     console.error('There was an error!', error);
    //   },
    // });
  }
}
