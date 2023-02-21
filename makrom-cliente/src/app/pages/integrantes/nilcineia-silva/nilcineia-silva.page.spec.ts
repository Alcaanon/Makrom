import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NilcineiaSilvaPage } from './nilcineia-silva.page';

describe('NilcineiaSilvaPage', () => {
  let component: NilcineiaSilvaPage;
  let fixture: ComponentFixture<NilcineiaSilvaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NilcineiaSilvaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NilcineiaSilvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
