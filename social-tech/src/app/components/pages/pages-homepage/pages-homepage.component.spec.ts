import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHomepageComponent } from './pages-homepage.component';

describe('PagesHomepageComponent', () => {
  let component: PagesHomepageComponent;
  let fixture: ComponentFixture<PagesHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
