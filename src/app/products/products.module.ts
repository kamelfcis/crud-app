import { NgModule } from '@angular/core';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';





@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    ProductComponent,
    
  ],
  imports: [ 
    CommonModule,
    SharedModule
    
  ]
})
export class ProductsModule { }
