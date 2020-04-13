import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

import { SharedModule } from './../shared/shared.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { CoreModule } from '../core/core.module'
import localeEs from '@angular/common/locales/es-MX';

import { ProductsRoutingModule } from './product-routing.module';

import { AppComponent } from '../app.component';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ProductsRoutingModule,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-mx' } ],
  bootstrap: [AppComponent]
})
export class ProductsModule { }
