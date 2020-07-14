import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;
  item: any = {};

  constructor(
    private messengerService: MessengerService,
    private modalService: NgbModal,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.item.qty = 1;
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          // TODO
        },
        (reason) => {
          // TODO
        }
      );
  }

  handlerAddToCart() {
    this.cartService.addProductToCart(this.productItem, this.item.qty);
    this.messengerService.sendMsgAddProductToCart();
  }

  handlerAddToWishlist() {
    this.addedToWishlist = this.wishlistService.addWishlist(
      this.productItem.id
    );
    this.messengerService.sendMsgAddToWishList();
  }
}
