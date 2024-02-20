import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDocteurComponent } from './navbar-docteur.component';

describe('NavbarDocteurComponent', () => {
  let component: NavbarDocteurComponent;
  let fixture: ComponentFixture<NavbarDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDocteurComponent]
    });
    fixture = TestBed.createComponent(NavbarDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
