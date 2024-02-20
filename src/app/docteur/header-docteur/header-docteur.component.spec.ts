import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDocteurComponent } from './header-docteur.component';

describe('HeaderDocteurComponent', () => {
  let component: HeaderDocteurComponent;
  let fixture: ComponentFixture<HeaderDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDocteurComponent]
    });
    fixture = TestBed.createComponent(HeaderDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
