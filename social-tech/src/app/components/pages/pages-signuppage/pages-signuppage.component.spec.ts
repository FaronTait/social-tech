import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSignuppageComponent } from './pages-signuppage.component';

describe('PagesSignuppageComponent', () => {
  let component: PagesSignuppageComponent;
  let fixture: ComponentFixture<PagesSignuppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSignuppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
