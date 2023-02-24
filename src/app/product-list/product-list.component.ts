import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  onNotify() {
  window.alert('Seras notificado cuando el producto este en venta');
}

share() {
  window.alert('Has compartido este producto!');
}


}

