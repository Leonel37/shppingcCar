import { Component, Input, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto!:Product;

share() {
  window.alert('Has compartido este producto!');
}

display: boolean = false;
showDialog() {
this.display = true;
}

constructor(private cartService:CartService){}
addToCart(product: Product) {
this.cartService.addToCart(product);
window.alert('Your product has been added to the cart!');
}
}
