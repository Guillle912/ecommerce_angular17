import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.routes')
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then( c => c.CheckoutComponent )
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
  },

];
