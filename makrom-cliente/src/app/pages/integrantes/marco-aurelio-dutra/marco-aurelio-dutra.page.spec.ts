import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcoAurelioDutraPage } from './marco-aurelio-dutra.page';

describe('MarcoAurelioDutraPage', () => {
  let component: MarcoAurelioDutraPage;
  let fixture: ComponentFixture<MarcoAurelioDutraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoAurelioDutraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcoAurelioDutraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
