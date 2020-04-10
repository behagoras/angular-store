import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  constructor() { }
  @Input() product: Product; // Equivalente a prop, dónde le vamos a pasar la data al componente
  @Output() clickAddToCart = new EventEmitter<any>(); // (clickAddToCart)= eventHandler($event):function
  addToCart(){
    this.clickAddToCart.emit(this.product.id)
  }
}
