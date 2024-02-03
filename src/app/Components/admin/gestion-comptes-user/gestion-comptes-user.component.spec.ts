import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComptesUserComponent } from './gestion-comptes-user.component';

describe('GestionComptesUserComponent', () => {
  let component: GestionComptesUserComponent;
  let fixture: ComponentFixture<GestionComptesUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionComptesUserComponent]
    });
    fixture = TestBed.createComponent(GestionComptesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
