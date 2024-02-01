import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilComponent } from './acceuil.component';
import { Router, RouterLink } from '@angular/router';

describe('AcceuilComponent', () => {
  let component: AcceuilComponent;
  let fixture: ComponentFixture<AcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilComponent]
    });
    fixture = TestBed.createComponent(AcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
