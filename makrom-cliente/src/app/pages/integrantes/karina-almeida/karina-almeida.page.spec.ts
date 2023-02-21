import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KarinaAlmeidaPage } from './karina-almeida.page';

describe('KarinaAlmeidaPage', () => {
  let component: KarinaAlmeidaPage;
  let fixture: ComponentFixture<KarinaAlmeidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KarinaAlmeidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KarinaAlmeidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
