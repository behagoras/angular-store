import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  constructor() { }
  product: Product = {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    price: 80000,
    description: 'bla bla bla bla bla'
  };
}
