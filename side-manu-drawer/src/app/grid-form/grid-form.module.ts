import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridFormComponent } from './grid-form.component';
import { GridFormRoutingModule } from './grid-form-routing.module';

@NgModule({
  declarations: [
    GridFormComponent
    ],
  imports: [
    CommonModule,
    GridFormRoutingModule
  ],
  providers: []
})
export class GridFormModule { }
