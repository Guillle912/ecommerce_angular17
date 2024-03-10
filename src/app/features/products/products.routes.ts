import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./products.component').then( c => c.ProductsComponent )
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details.component').then( c => c.DetailsComponent )
  }
];

export default routes;
