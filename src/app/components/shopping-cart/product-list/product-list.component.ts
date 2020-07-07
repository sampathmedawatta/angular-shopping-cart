import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  featureProductList: Product[] = [];
  homePageProductList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getHomePageProducts().subscribe((products) => {
      this.homePageProductList = products;

      console.log(this.homePageProductList);
    });

    this.productService.getFeatureProducts().subscribe((products) => {
      this.featureProductList = products;
      console.log(this.featureProductList);
    });
  }
}
