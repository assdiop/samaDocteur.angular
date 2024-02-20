import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDocteurComponent } from './sidebar-docteur.component';

describe('SidebarDocteurComponent', () => {
  let component: SidebarDocteurComponent;
  let fixture: ComponentFixture<SidebarDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarDocteurComponent]
    });
    fixture = TestBed.createComponent(SidebarDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
