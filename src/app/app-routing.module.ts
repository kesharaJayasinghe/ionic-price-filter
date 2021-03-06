import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pricefilter-modal',
    loadChildren: () => import('./modals/pricefilter-modal/pricefilter-modal.module').then( m => m.PricefilterModalPageModule)
  },
  {
    path: 'colorfilter-modal',
    loadChildren: () => import('./modals/colorfilter-modal/colorfilter-modal.module').then( m => m.ColorfilterModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
