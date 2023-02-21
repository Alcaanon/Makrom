import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdalbertoOliveiraPage } from './adalberto-oliveira.page';

describe('AdalbertoOliveiraPage', () => {
  let component: AdalbertoOliveiraPage;
  let fixture: ComponentFixture<AdalbertoOliveiraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdalbertoOliveiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdalbertoOliveiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
