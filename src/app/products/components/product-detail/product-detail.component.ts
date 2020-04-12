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

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // console.log(id)
      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    });
  }

}
