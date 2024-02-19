import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  // constructor(private router: Router) { 

  // }
  

    const router = new Router();

  const token = localStorage.getItem('token');

  // Vérifier si le token d'authentification est présent dans le local storage
  if (!token) {
    // Si le token n'existe pas, rediriger l'utilisateur vers la page de connexion
    router.navigate(['/auth']);
    return false;
  }
  const userConnect = JSON.parse(localStorage.getItem('currentUser') || '');
  if (userConnect.role_id == 1) {
    return true;
  }
  else {
    router.navigate(['/auth']);
    return false;
  }
};
