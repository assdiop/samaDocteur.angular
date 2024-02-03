import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsUtlisationsComponent } from './conditions-utlisations.component';

describe('ConditionsUtlisationsComponent', () => {
  let component: ConditionsUtlisationsComponent;
  let fixture: ComponentFixture<ConditionsUtlisationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionsUtlisationsComponent]
    });
    fixture = TestBed.createComponent(ConditionsUtlisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
