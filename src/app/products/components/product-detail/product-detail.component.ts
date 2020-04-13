import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  product: Product;
  id: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.id = id;
      this.fetchProduct(id);
      console.log(this.product);
    });
  }

  fetchProduct(id): void {
    this.productsService.getProduct(id)
      .subscribe((product) => {
        this.product = product;
        // console.log(product);
      });
  }

  editProduct() {
    console.log('edit product');
    const partialProduct: Partial<Product> = {
      description: 'Cambiando la descripción'
    };
    this.productsService.updateProduct(this.id, partialProduct)
    .subscribe((product) => {
      this.product = product;
      console.log(product);
    });
  }

  deleteProduct() {
    console.log('delete product', this.id);

    this.productsService.deleteProduct(this.id)
    .subscribe(rta => {
      console.log('deleted product', rta);
    });
  }
}
