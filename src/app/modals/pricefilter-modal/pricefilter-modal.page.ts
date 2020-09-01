import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-pricefilter-modal',
  templateUrl: './pricefilter-modal.page.html',
  styleUrls: ['./pricefilter-modal.page.scss'],
})
export class PricefilterModalPage implements OnInit {

  modalTitle: string;
  modelId: number;

  minValue: number = 200;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 10,
    minRange: 150,
    maxRange: 600,
    pushRange: true,
    draggableRange: true,
    translate: (value: number): string => {
      return "$" + value;
    },
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closePriceModal() {
    // const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss();
  }

}
