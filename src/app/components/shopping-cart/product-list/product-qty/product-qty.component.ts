import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-qty',
  templateUrl: './product-qty.component.html',
  styleUrls: ['./product-qty.component.css'],
})
export class ProductQtyComponent implements OnInit {
  item: any = {};

  constructor() {}

  ngOnInit(): void {
    this.item.qty = 1;
  }
}
