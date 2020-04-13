import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }
  getAllProducts() {
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`)
  }
}
