import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PryscillaFerreiraPage } from './pryscilla-ferreira.page';

describe('PryscillaFerreiraPage', () => {
  let component: PryscillaFerreiraPage;
  let fixture: ComponentFixture<PryscillaFerreiraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PryscillaFerreiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PryscillaFerreiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
