import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[];

  handleProductAddToCart(id: number) {
    console.log('product -> id', id);
  }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

}
