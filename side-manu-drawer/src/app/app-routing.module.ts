import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      {
        path: 'home-page',
        loadChildren: () => import('./home-page/home.module').then(m => m.HomeModule)
      },
      {
        path: 'grid-form',
        loadChildren: () => import('./grid-form/grid-form.module').then(m => m.GridFormModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'customer-order',
        loadChildren: () => import('./customer-order/customer-order.module').then(m => m.CustomerOrderModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'models',
        loadChildren: () => import('./models/models.module').then(m => m.ModelsModule)
      },
    
      {
        path: '',
        redirectTo:'',
        pathMatch:'full'
      }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
