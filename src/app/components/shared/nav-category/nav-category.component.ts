import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { OperationResult } from 'src/app/models/operation-result';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.css'],
})
export class NavCategoryComponent implements OnInit {
  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategoryList()
      .subscribe((result: OperationResult) => {
        this.categoryList = result.data;
      });
  }
}
