import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
  ){
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    // console.log( Object.keys(this.form.get('title').errors) );


    if(this.form.valid) {
      const newProduct = this.form.value;
      this.productsService.createProduct(newProduct)
      .subscribe( product => {
        this.router.navigate(['/admin/products'])
        console.log(product);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
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
