import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from './apiUrl';
import { RendezVous } from '../models/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  
  constructor(private http: HttpClient) { }





  getAllRendezVous(): Observable<any[]> {
    return this.http.get<any[]>(`${url}rdv`);
  }

  // addRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
  //   return this.http.post<RendezVous>(, rendezVous);
  // }

  addRendezVous(rendezVous: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return this.http.post<any[]>(`${url}ajouter/rdv`, rendezVous, {
      headers: headers,
    });
  }


  // updateRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
  //   // const url = `${url}/${rendezVous.id}`;
  //   return this.http.put<RendezVous>(`${url}`, rendezVous);
  // }

  // deleteRendezVous(id: number): Observable<void> {
  //   // const url = `${`${url}`}/${id}`;
  //   return this.http.delete<void>(url);
  // }
}