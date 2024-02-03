import { TestBed } from '@angular/core/testing';

import { RegisterdocteurService } from './registerdocteur.service';

describe('RegisterdocteurService', () => {
  let service: RegisterdocteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterdocteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
