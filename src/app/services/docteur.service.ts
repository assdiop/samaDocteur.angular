import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docteur } from '../models/docteur';
import { url } from './apiUrl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocteurService {
  Docteur(newDocteur: Docteur) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }


  //   getAllMentors(): Observable<Docteur[]> {
  //     return this.http.get<Docteur[]>(`${url}/registerdocteur`);
  //   console.log(Docteur);
  // }


     registerDocteur(docteur: any): Observable<any> {
       return this.http.post<Docteur>(`${url}registerdocteur`, docteur);
       console.log(Docteur);
  }
  // // Méthode pour ajouter un utilisateur
  addUser(docteur: Docteur, onSuccess: Function) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
return this.http.post<Docteur>(`${url}registerdocteur`, docteur);
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


