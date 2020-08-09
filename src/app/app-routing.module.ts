import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { ProductCategoryComponent } from './components/shopping-cart/product-category/product-category.component';
import { AuthGuard } from './auth/auth.guard';
import { OrderConfirmationComponent } from './components/shopping-cart/checkout/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
  },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'checkout/order-confirmation/:id',
    component: OrderConfirmationComponent,
  },
  { path: 'product-category/:name', component: ProductCategoryComponent },
  { path: '**', component: PageNotFoundComponent },

  //TODO add user detail page and enable edit
  // user route paths
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children: [
  //     { path: 'user-details', component: UserDetailsComponent },
  //     { path: 'order-history', component: OrderHistoryComponent ,
  //  canActivate: [AuthGuard]},
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
