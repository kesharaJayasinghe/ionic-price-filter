import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricefilterModalPageRoutingModule } from './pricefilter-modal-routing.module';

import { PricefilterModalPage } from './pricefilter-modal.page';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricefilterModalPageRoutingModule,
    Ng5SliderModule,
  ],
  declarations: [PricefilterModalPage]
})
export class PricefilterModalPageModule {}
