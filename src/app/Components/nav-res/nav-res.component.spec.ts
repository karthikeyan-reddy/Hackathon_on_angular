import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResComponent } from './nav-res.component';

describe('NavResComponent', () => {
  let component: NavResComponent;
  let fixture: ComponentFixture<NavResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavResComponent]
    });
    fixture = TestBed.createComponent(NavResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
