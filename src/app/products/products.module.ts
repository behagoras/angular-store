import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module'
import localeEs from '@angular/common/locales/es-MX';

import { ProductsRoutingModule } from './product-routing.module';

import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component';
import { AppComponent } from '../app.component';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
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
