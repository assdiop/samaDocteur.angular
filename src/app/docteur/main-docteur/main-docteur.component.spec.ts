import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDocteurComponent } from './main-docteur.component';

describe('MainDocteurComponent', () => {
  let component: MainDocteurComponent;
  let fixture: ComponentFixture<MainDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDocteurComponent]
    });
    fixture = TestBed.createComponent(MainDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
