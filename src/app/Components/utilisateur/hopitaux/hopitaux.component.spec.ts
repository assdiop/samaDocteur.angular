import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitauxComponent } from './hopitaux.component';

describe('HopitauxComponent', () => {
  let component: HopitauxComponent;
  let fixture: ComponentFixture<HopitauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HopitauxComponent]
    });
    fixture = TestBed.createComponent(HopitauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
