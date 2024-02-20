import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilDocteurComponent } from './acceuil-docteur.component';

describe('AcceuilDocteurComponent', () => {
  let component: AcceuilDocteurComponent;
  let fixture: ComponentFixture<AcceuilDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilDocteurComponent]
    });
    fixture = TestBed.createComponent(AcceuilDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
