import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AddProductsComponent
  ]
})
export class ProductsModule { }
