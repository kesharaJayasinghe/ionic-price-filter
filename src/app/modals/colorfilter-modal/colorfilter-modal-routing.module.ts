import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorfilterModalPage } from './colorfilter-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ColorfilterModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorfilterModalPageRoutingModule {}
