import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHopitauxComponent } from './gestion-hopitaux.component';

describe('GestionHopitauxComponent', () => {
  let component: GestionHopitauxComponent;
  let fixture: ComponentFixture<GestionHopitauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHopitauxComponent]
    });
    fixture = TestBed.createComponent(GestionHopitauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
