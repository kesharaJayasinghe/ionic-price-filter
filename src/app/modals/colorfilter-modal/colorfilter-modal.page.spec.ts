import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorfilterModalPage } from './colorfilter-modal.page';

describe('ColorfilterModalPage', () => {
  let component: ColorfilterModalPage;
  let fixture: ComponentFixture<ColorfilterModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfilterModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorfilterModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
