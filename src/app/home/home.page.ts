import { Component } from "@angular/core";
// import { Options, LabelType, ChangeContext, PointerType } from "ng5-slider";
import { ModalController } from "@ionic/angular";
// import { PricefilterComponent } from "../components/pricefilter/pricefilter.component";
// import { ColorfilterComponent } from "../components/colorfilter/colorfilter.component";
import { PricefilterModalPage } from '../modals/pricefilter-modal/pricefilter-modal.page';
import { ColorfilterModalPage } from '../modals/colorfilter-modal/colorfilter-modal.page';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  dataReturned: any;

  constructor(
    public modalController: ModalController,
    // private pricefilterpop: PopoverController,
    // private colorfilterpop: PopoverController
  ) {}

  async openPriceModal() {
    const priceModal = await this.modalController.create({
      component: PricefilterModalPage,
      cssClass: 'pricefilter-css',
      componentProps: {
        "paramID": 123,
        "paramTitle": "Price"
      }
    });

    priceModal.onDidDismiss().then((dataReturned) => {
      if(dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await priceModal.present();
  }

  async openColorModal() {
    const colorModal = await this.modalController.create({
      component: ColorfilterModalPage,
      cssClass: 'colorfilter-css',
      componentProps: {
        "paramID": 456,
        'paramTitle': "Color"
      }
    });

    colorModal.onDidDismiss().then((dataReturned) => {
      if(dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
    return await colorModal.present();
  }

  // CreatePricePopover() {
  //   this.pricefilterpop
  //     .create({ component: PricefilterComponent })
  //     .then((pricePopoverElement) => {
  //       pricePopoverElement.present();
  //     });
  // }

  // CreateColorPopover() {
  //   this.colorfilterpop
  //     .create({ component: ColorfilterComponent })
  //     .then((colorPopoverElement) => {
  //       colorPopoverElement.present();
  //     });
  // }
}
