import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MariaGeniAlmeidaPage } from './maria-geni-almeida.page';

describe('MariaGeniAlmeidaPage', () => {
  let component: MariaGeniAlmeidaPage;
  let fixture: ComponentFixture<MariaGeniAlmeidaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MariaGeniAlmeidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MariaGeniAlmeidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
