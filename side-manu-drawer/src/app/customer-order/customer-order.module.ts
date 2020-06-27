import { NgModule } from '@angular/core';
import { CustomerOrderComponent } from './customer-order.component';
import { CommonModule } from '@angular/common';
import { CustomerOrderRoutingModule } from './customer-order-routing.module';



@NgModule({
  declarations: [
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    CustomerOrderRoutingModule

  ],
  providers: []
})
export class CustomerOrderModule { }
