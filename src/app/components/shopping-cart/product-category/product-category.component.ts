import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  productList: Product[] = [];
  categoryName: string;
  wishlist: Guid[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getProductsByCategoryName();
    this.wishlist = this.wishlistService.getWishlist();
  }

  getProductsByCategoryName() {
    this.route.params.subscribe((params) => {
      this.categoryName = params.name;
      this.loadProductList(this.categoryName);
    });
  }

  loadProductList(categoryName: string) {
    this.productService
      .getProductsByCategory(categoryName)
      .subscribe((products) => {
        this.productList = products;
      });
  }
}
