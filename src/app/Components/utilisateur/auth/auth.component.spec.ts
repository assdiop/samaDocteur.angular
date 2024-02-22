import { ComponentFixture, TestBed } from '@angular/core/testing';



import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Test pour valider le formulaire de connexion avec des identifiants valides
  it('devrait valider le formulaire de connexion avec des identifiants valides', () => {
    component.email = 'admiin@gmail.com';
    component.password = 'admin@123';
    expect(component.login()).toBeTrue();
  });

  // Test pour valider le formulaire de connexion avec un email invalide
  it('devrait valider le formulaire de connexion avec un email invalide', () => {
    // Email invalide
    component.email = 'invalidemail';
    component.password = '123456';
    // Doit retourner false car l'email est invalide
    expect(component.login()).toBeFalse();
  });
});
