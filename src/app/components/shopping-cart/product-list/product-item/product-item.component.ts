import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(
    private messengerService: MessengerService,
    private modalService: NgbModal,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

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
    this.cartService.addProductToCart(this.productItem);
    this.messengerService.sendMsgAddProductToCart(this.productItem);
  }
}
