import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts()
    .subscribe((products)=>{
      this.products = products;
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(deleted => {
      if (deleted){
        console.log(`Product ${id} deleted`)
        this.products = this.products.filter(product => product.id !== id)
      }else {
        console.error('Unable to delete the product');
      }
    });
  }

}
