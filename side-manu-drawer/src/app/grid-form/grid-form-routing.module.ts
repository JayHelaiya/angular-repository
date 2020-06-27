import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridFormComponent } from './grid-form.component';


const routes: Routes = [
  {
    path:'',
    component:GridFormComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridFormRoutingModule { }
