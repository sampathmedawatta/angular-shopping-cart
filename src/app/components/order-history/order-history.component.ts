import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrderService } from 'src/app/services/order.service';
import { OperationResult } from 'src/app/models/operation-result';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orderList: Order[] = [];
  user: User;

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('/shop');
    } else {
      this.getOrderHistory();
    }
  }

  getOrderHistory() {
    var localUser = localStorage.getItem('user');
    if (localUser != null) {
      this.user = JSON.parse(localUser);
      this.orderService
        .getOrderHistory(this.user.id)
        .subscribe((result: OperationResult) => {
          this.orderList = result.data;
        });
    }
  }

  handlerVieworderItem(orderItem) {
    this.router.navigateByUrl('/checkout/order-confirmation/' + orderItem.id);
  }
}
