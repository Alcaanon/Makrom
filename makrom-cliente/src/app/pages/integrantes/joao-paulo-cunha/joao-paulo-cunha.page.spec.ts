import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoaoPauloCunhaPage } from './joao-paulo-cunha.page';

describe('JoaoPauloCunhaPage', () => {
  let component: JoaoPauloCunhaPage;
  let fixture: ComponentFixture<JoaoPauloCunhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JoaoPauloCunhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoaoPauloCunhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
