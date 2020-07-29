import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavCategoryComponent } from './components/shared/nav-category/nav-category.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { CheckoutItemListComponent } from './components/shopping-cart/checkout/checkout-item-list/checkout-item-list.component';
import { ProductCategoryComponent } from './components/shopping-cart/product-category/product-category.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DeliveryDetailsComponent } from './components/shopping-cart/checkout/delivery-details/delivery-details.component';
import { PaymentSummaryComponent } from './components/shopping-cart/checkout/payment-summary/payment-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    NavCategoryComponent,
    BannerComponent,
    ProductListComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    OrderHistoryComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    CheckoutItemListComponent,
    ProductCategoryComponent,
    DeliveryDetailsComponent,
    PaymentSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
