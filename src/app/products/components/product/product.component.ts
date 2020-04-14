import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnInit,
  // DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { CartService } from '../../../core/services/cart.service';

registerLocaleData(localeEs);
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
  ) {
    let i = 1;
    console.log('0. Constructor producto');
  }

  ngOnChanges(changes: SimpleChanges): void{
    let i = 1;
    console.log('1. ngOnChange producto',this.product.id, ', Llamada#', i++);
    console.log('changes', changes)
  }

  ngOnInit(){
    let i = 1;
    console.log('2. ngOnInit producto',this.product.id, ', Llamada#', i++);
  }

  // ngDoCheck(){
  //   let i = 1;
  //   console.log('3. ngDoCheck producto',this.product.id, ', Llamada#', i++);
  // }

  ngOnDestroy(){
    let i = 1;
    console.log('3. ngOnDestroy producto',this.product.id, ', Llamada#', i++);
  }

  today = new Date()

  @Input() product: Product; // Equivalente a prop, dónde le vamos a pasar la data al componente
  @Output() clickAddToCart = new EventEmitter<any>(); // (clickAddToCart)= eventHandler($event):function
  addToCart(){
    this.clickAddToCart.emit(this.product.id)
    this.cartService.addToCart(this.product);
  }
}
