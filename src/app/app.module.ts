import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
