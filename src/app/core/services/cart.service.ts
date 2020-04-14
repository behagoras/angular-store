import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();
  constructor() { }
  addToCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
  removeFromCart(id: string){}
  getCart(){}
}
