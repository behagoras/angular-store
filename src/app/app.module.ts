import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import localeEs from '@angular/common/locales/es-MX';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component'
import { TestComponent } from './components/test/test.component';
import { CartComponent } from './components/cart/cart.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-mx' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
