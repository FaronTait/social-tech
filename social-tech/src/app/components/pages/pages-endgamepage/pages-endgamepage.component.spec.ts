import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEndgamepageComponent } from './pages-endgamepage.component';

describe('PagesEndgamepageComponent', () => {
  let component: PagesEndgamepageComponent;
  let fixture: ComponentFixture<PagesEndgamepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesEndgamepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEndgamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
