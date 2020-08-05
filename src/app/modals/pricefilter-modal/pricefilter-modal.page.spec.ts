import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricefilterModalPage } from './pricefilter-modal.page';

describe('PricefilterModalPage', () => {
  let component: PricefilterModalPage;
  let fixture: ComponentFixture<PricefilterModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricefilterModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricefilterModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
