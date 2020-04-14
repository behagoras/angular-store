import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ){
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe((product: Product) => {
        this.form.patchValue(product);
      })
    })
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const updatedProduct = this.form.value;
      this.productsService.updateProduct(this.id, updatedProduct)
      .subscribe( product => {
        this.router.navigate(['/admin/products'])
        console.log(product);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: [
        0,
        [
          Validators.required,
          MyValidators.isPriceValid
        ]
      ],
      image: [''],
      description: ['', Validators.required],
    });
  }

  get priceField() {
    return this.form.get('price');
  }


}
