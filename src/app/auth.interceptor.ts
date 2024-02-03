import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './services/authentification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 constructor(private authentificationService: AuthentificationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Ajouter le token à l'en-tête d'autorisation si l'utilisateur est connecté
    const authToken = this.authentificationService.getToken();
    
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

