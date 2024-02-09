import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docteur } from '../models/docteur';
import { url } from './apiUrl';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class DocteurService {


  constructor(private http: HttpClient) { }


  //   getAllMentors(): Observable<Docteur[]> {
  //     return this.http.get<Docteur[]>(`${url}/registerdocteur`);
  //   console.log(Docteur);
  // }


  //    registerDocteur(docteur: any): Observable<any> {
  //      return this.http.post<Docteur>(`${url}registerdocteur`, docteur);
  //      console.log(Docteur);
  // }
  // // Méthode pour ajouter un utilisateur
//   addDocteur(docteur: Docteur, onSuccess: Function) {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
// return this.http.post<Docteur>(`${url}registerdocteur`, docteur);
  //   }
  // verifier champ
  verifierChamp(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
    addDocteur(newDocteur: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return this.http.post<any[]>(`${url}registerdocteur`, newDocteur, {
      headers: headers,
    });
  }
    // Méthode pour Supprimer les docteur 

  supprimerDocteur(id: number): Observable<any> {
    const token= localStorage.getItem('token');
    return token
      ? this.http.delete<any>(`${url}docteur/archive/` + id, {
          headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
        })
      : of(null);
  }

  // methode pour liste des annonces
  listerDocteurs(): Observable<any> {
    const  token  = localStorage.getItem('token');

    return  token 
      ? this.http.get<any>(`${url}docteur`, {
          headers: new HttpHeaders({ Authorization: `Bearer ${ token }` }),
        })
      : of(null);
  }


  // Methode pour ajouter specialier 

     addSpecialite(nom_specialite: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return this.http.post<any[]>(`${url}specialite/create`, nom_specialite, {
      headers: headers,
    });
  }

  // lister Specialite 

  

   listerSpecialiste(): Observable<any> {
    const  token  = localStorage.getItem('token');

    return  token 
      ? this.http.get<any>(`${url}specialite`, {
          headers: new HttpHeaders({ Authorization: `Bearer ${ token }` }),
        })
      : of(null);
  }
  
  //   this.http.post<Docteur>(`${url}/registerDocteur`, docteur).subscribe((response: any) => onSuccess(response));
  // }

  // getDocteuryId(id: number): Observable<Docteur> {
  //   return this.http.get<Docteur>(`${url}/mentor/show/${id}`);
  // }

  // updateDocteur(mentor: Docteur, id: number): Observable<Docteur> {
  //   return this.http.put<Docteur>(`${url}/mentor/edit/${id}`, docteur)
  // }

  // archiverDocteur(id: number, mentor: Docteur):Observable<Docteur>{
  //   return this.http.put<Docteur>(`${url}/mentor/archive/${id}`, mentor)
  // }
}


