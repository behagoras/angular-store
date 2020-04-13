import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  handleProductAddToCart(id: number) {
    console.log('product -> id', id);
  }

  ngOnInit(): void {
    this.fetchProducts();
    // this.products = this.productsService.getAllProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
        // console.log(products);
      });
  }

  createProduct() {
    console.log("holi");
    const newProduct: Product = {
      id: '223',
      title: 'nuevo desde Angular',
      image: 'assets/images/banner-1.jpg',
      price: 123,
      description:'Descripción Angulera'
    }
    // console.log("creating product")
    this.productsService.createProduct(newProduct)
    .subscribe((product) => {
      this.products.push(newProduct);
      console.log(product);
    });
  }

}
