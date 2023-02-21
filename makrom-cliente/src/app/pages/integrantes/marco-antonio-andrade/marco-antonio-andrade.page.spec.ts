import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcoAntonioAndradePage } from './marco-antonio-andrade.page';

describe('MarcoAntonioAndradePage', () => {
  let component: MarcoAntonioAndradePage;
  let fixture: ComponentFixture<MarcoAntonioAndradePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoAntonioAndradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcoAntonioAndradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
