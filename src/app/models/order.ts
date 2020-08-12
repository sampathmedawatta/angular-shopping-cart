import { Guid } from 'guid-typescript';
import { User } from './user';
import { OrderItem } from './order-item';
import { PaymentMethod } from './payment-method';

export class Order {
  id: Guid;
  totalAmount: number;
  tax: number;
  subTotal: number;
  deliveryDetails: User;
  orderItems: OrderItem[];
  paymentMethodId: string;
  paymentMethod: PaymentMethod;
  orderDate: string;

  constructor(
    orderDetails: any,
    deliveryDetails: User,
    orderItems: OrderItem[],
    paymentMethodId: any
  ) {
    this.totalAmount = orderDetails.totalAmount;
    this.tax = orderDetails.tax;
    this.subTotal = orderDetails.subTotal;
    this.deliveryDetails = deliveryDetails;
    this.orderItems = orderItems;
    this.paymentMethodId = paymentMethodId;
  }
}
