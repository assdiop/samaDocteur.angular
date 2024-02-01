import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDocteurComponent } from './gestion-docteur.component';

describe('GestionDocteurComponent', () => {
  let component: GestionDocteurComponent;
  let fixture: ComponentFixture<GestionDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDocteurComponent]
    });
    fixture = TestBed.createComponent(GestionDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
