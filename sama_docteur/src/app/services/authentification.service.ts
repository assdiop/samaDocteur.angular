import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/users';
import { url } from 'src/app/services/apiUrl';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { JwtPayload } from 'jwt-decode';

declare function jwt_decode<T extends JwtPayload = JwtPayload>( token: string ): T;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private route: Router) { }
  

  // connexion
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${url}login`, { email, password })
      .pipe(
        map((response) => {
          // Stocker les informations utilisateur et le token dans le stockage local
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.authorization.token);
          return response;
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  // Inscription
  // registerproprietaire(proprietaire: Proprietaire): Observable<any> {
  //   console.log("Données d'inscription :", proprietaire);

  //   return this.http.post<any>(`${this.apiUrl}/register`, proprietaire).pipe(
  //     tap((response) => {
  //       console.log("Réponse de l'API après inscription :", response);
  //     }),
  //     catchError((error) => {
  //       console.error("Erreur lors de l'inscription :", error);
  //       throw error;
  //     })
  //   );
  // }

  // Clients
//  registerClients(Client: Client): Observable<Client> {
//   console.log("Données d'inscription :", Client);

//   return this.http.post<Client>(`${url}/registerclient`, Clients).pipe(
//     tap((response) => {
//       console.log("Réponse de l'API après inscription :", response);
//     }),
//     catchError((error) => {
//       console.error("Erreur lors de l'inscription :", error);
//       throw error;
//     })
//   );
// }
  // inscription utilisateur

  
  register(user: any): Observable<any> {
  return this.http.post<User>(`${url}registerclient`, user);
  }

   registerDocteur(user: any): Observable<any> {
  return this.http.post<User>(`${url}registerdocteur`, user);
  }




  // Déconnexion
  // logout(): Observable<any> {
  //   // Récupérer le token du stockage local
  //   var token = localStorage.getItem('token');
  //   console.log(token); // Utilisez la variable token ici

  //   // Assurez-vous que token n'est pas null ou undefined avant de l'utiliser
  //   if (!token) {
  //     console.error('Token non trouvé dans le stockage local');
  //     return throwError('Token non trouvé');
  //   }

  //   // Assurez-vous que l'URL est correcte
  //   const logoutUrl = `${url}/auth/logout`;

  //   // Effectuez la requête HTTP POST pour se déconnecter
  //   return this.http.post<any>(logoutUrl, {}).pipe(
  //     tap(() => {
  //       // Supprimer le token du stockage local
  //       localStorage.removeItem('token');

  //       // Vider complètement le localStorage
  //       localStorage.clear();
  //     }),

  //     catchError((error) => {
  //       throw error;
  //     })
  //   );
  // }




  // récupération du token

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Is connected pour vérifier s'il est toujours connecté
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }



  // Récupérer les informations du vendeur depuis l'API
  getvendeurDetails(id: number): Observable<any> {
    const token = this.getToken();

    if (!token) {
      return throwError('Token non trouvé');
    }

    return this.http
      .get<any>(`${url}/acheteurShow/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }





  // // Mettre à jour les informations de l'vendeur
  // updatevendeurDetails(id: number, vendeurData: any): Observable<any> {
  //   const token = this.getToken();

  //   if (!token) {
  //     return throwError('Token non trouvé');
  //   }+

  //   return this.http
  //     .patch<any>(`${url}/acheteurUpdate/${id}`, vendeurData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .pipe(
  //       catchError((error) => {
  //         throw error;
  //       })
  //     );
  // }




  // Méthode fictive pour récupérer l'ID de l'utilisateur connecté
  getLoggedInUserId(): number | null {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode(token); // Utiliser any pour le résultat décodé
      return decodedToken.userId;
    } else {
      return null;
    }
  }



  
}

  //   getAllUser() {
  //   return this.http.get<User[]>(`${url}user/index`);
  // }

 

  //  register(mentore: User, onSuccess: Function){
  //   this.http.post(`${url}register`,mentore).subscribe((reponse: any) => onSuccess(reponse));

  // }

  


  //  logout() {
  //   // On vide les infos du token et on met à je la val de isAuth$
  //  localStorage.removeItem('userOnline')
  //   this.route.navigate(['login']);
  // }

