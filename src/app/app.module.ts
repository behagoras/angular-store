import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import localeEs from '@angular/common/locales/es-MX';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component'
import { TestComponent } from './test/test.component';
import { CartComponent } from './components/cart/cart.component';
import { registerLocaleData } from '@angular/common';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
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
