import { Component } from "@angular/core";
import { Options, LabelType, ChangeContext, PointerType } from "ng5-slider";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  minValue: number = 100;
  maxValue: number = 300;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 10,
    minRange: 100,
    maxRange: 600,
    pushRange: true,
    draggableRange: true,
    translate: (value: number): string => {
      return "$" + value;
    },
  };

  constructor() {}
}
