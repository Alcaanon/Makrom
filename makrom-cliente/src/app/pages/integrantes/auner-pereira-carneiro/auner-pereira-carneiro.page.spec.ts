import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AunerPereiraCarneiroPage } from './auner-pereira-carneiro.page';

describe('AunerPereiraCarneiroPage', () => {
  let component: AunerPereiraCarneiroPage;
  let fixture: ComponentFixture<AunerPereiraCarneiroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AunerPereiraCarneiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AunerPereiraCarneiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
