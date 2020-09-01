import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { PricefilterModalPageModule } from '../modals/pricefilter-modal/pricefilter-modal.module';
import { ColorfilterModalPageModule } from '../modals/colorfilter-modal/colorfilter-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng5SliderModule,
    PricefilterModalPageModule,
    ColorfilterModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
