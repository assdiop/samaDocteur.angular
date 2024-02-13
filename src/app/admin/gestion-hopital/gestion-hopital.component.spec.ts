import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHopitalComponent } from './gestion-hopital.component';

describe('GestionHopitalComponent', () => {
  let component: GestionHopitalComponent;
  let fixture: ComponentFixture<GestionHopitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHopitalComponent]
    });
    fixture = TestBed.createComponent(GestionHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
