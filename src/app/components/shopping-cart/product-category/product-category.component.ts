import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  productList: Product[] = [];
  categoryName: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductsByCategoryName();
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
