import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorfilterModalPageRoutingModule } from './colorfilter-modal-routing.module';

import { ColorfilterModalPage } from './colorfilter-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorfilterModalPageRoutingModule
  ],
  declarations: [ColorfilterModalPage]
})
export class ColorfilterModalPageModule {}
