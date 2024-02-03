import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfidentialitesComponent } from './politique-confidentialites.component';

describe('PolitiqueConfidentialitesComponent', () => {
  let component: PolitiqueConfidentialitesComponent;
  let fixture: ComponentFixture<PolitiqueConfidentialitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueConfidentialitesComponent]
    });
    fixture = TestBed.createComponent(PolitiqueConfidentialitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
