import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { TabComponent } from './component/tab/tab.component';
import { Tab2Component } from './component/tab2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TabComponent,
    Tab2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
