import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { orderUrl, orderByIdUrl, orderHistorysUrl } from '../config/api';
import { OperationResult } from '../models/operation-result';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  placeOrder(order: Order): Observable<OperationResult> {
    const body = JSON.stringify(order);

    return this.http.post<OperationResult>(orderUrl, body, {
      headers: this.headers,
    });
  }

  getOrderById(Id: Guid): Observable<OperationResult> {
    return this.http.get<OperationResult>(orderByIdUrl + '/?Id=' + Id);
  }

  getOrderHistory(userId: Guid): Observable<OperationResult> {
    return this.http.get<OperationResult>(orderHistorysUrl + '/?Id=' + userId);
  }
}
