import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondocteurhopitalComponent } from './gestiondocteurhopital.component';

describe('GestiondocteurhopitalComponent', () => {
  let component: GestiondocteurhopitalComponent;
  let fixture: ComponentFixture<GestiondocteurhopitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiondocteurhopitalComponent]
    });
    fixture = TestBed.createComponent(GestiondocteurhopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
