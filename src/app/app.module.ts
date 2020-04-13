import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import localeEs from '@angular/common/locales/es-MX';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CartComponent } from './components/cart/cart.component';
import { registerLocaleData } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CartComponent,
    NotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-mx' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
