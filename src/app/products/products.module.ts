import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsPage } from './products.page';



@NgModule({
  declarations: [
    ProductComponent,
    FiltersComponent,
    ProductsPage,
  ],
  exports:[
    ProductComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductsModule { }
