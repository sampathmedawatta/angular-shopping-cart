import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  featureProductList: Product[] = [];
  homePageProductList: Product[] = [];
  wishlist: Guid[] = [];
  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.productService.getHomePageProducts().subscribe((products) => {
      this.homePageProductList = products;
    });

    this.productService.getFeatureProducts().subscribe((products) => {
      this.featureProductList = products;
    });

    this.wishlist = this.wishlistService.getWishlist();
  }
}
