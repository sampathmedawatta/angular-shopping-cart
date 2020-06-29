import { Guid } from 'guid-typescript';
export class Product {
  id: Guid;
  name: string;
  description: string;
  stockQty: number;
  price: number;
  imageUrl: string;

  constructor(
    id,
    name,
    description = '',
    price = 0,
    imageUrl = 'assets/images/sample-product-1.jpg'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
