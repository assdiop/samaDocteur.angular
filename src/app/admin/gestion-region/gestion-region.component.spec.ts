import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegionComponent } from './gestion-region.component';

describe('GestionRegionComponent', () => {
  let component: GestionRegionComponent;
  let fixture: ComponentFixture<GestionRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRegionComponent]
    });
    fixture = TestBed.createComponent(GestionRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
