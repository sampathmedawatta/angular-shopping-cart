import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { OperationResult } from 'src/app/models/operation-result';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orderList: Order[];
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
      // this.orderService
      //   .getOrderHistory(this.user.id)
      //   .subscribe((result: OperationResult) => {
      //     this.orderList = result.data;
      //   });

      this.orderService.getOrderHistory(this.user.id).subscribe({
        next: (result: OperationResult) => {
          try {
            if (result.statusId == 200 && result.data != null) {
              this.orderList = result.data;
            } else {
              console.error('Something went Wrong!');
            }
          } catch (error) {
            console.log('get order catch error 1 ' + error);
          }
        },
        error: (err) => {
          console.log('get order catch error' + err);
          // try {
          //   if (err.status == 401) {
          //     console.error('There was an error 401 !', err);
          //   } else {
          //     console.error('error!', err);
          //   }
          // } catch (error) {
          //   console.log('get order catch error' + error);
          // }
        },
      });
    }
  }

  handlerVieworderItem(orderItem) {
    this.router.navigateByUrl('/checkout/order-confirmation/' + orderItem.id);
  }
}
