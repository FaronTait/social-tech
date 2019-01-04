import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGamepageComponent } from './pages-gamepage.component';

describe('PagesGamepageComponent', () => {
  let component: PagesGamepageComponent;
  let fixture: ComponentFixture<PagesGamepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesGamepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesGamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
