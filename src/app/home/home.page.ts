import { Component } from "@angular/core";
// import { Options, LabelType, ChangeContext, PointerType } from "ng5-slider";
import { PopoverController, ModalController } from "@ionic/angular";
// import { PricefilterComponent } from "../components/pricefilter/pricefilter.component";
// import { ColorfilterComponent } from "../components/colorfilter/colorfilter.component";
import { PricefilterModalPage } from '../modals/pricefilter-modal/pricefilter-modal.page';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  dataReturned: any;

  constructor(
    public modalController: ModalController,
    private pricefilterpop: PopoverController,
    private colorfilterpop: PopoverController
  ) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: PricefilterModalPage,
      cssClass: 'pricefilter-css',
      componentProps: {
        "paramID": 123,
        "paramTitle": "Price"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if(dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
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
