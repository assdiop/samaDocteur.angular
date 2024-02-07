import { HttpHeaders ,HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { url } from './apiUrl';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  verifierChamps(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  
  // Ajout Region
 
  
  addRegion(nomRegion: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    // const newRegion = { nom: nomRegion }; // Créer un nouvel objet pour la région avec la propriété nom

    return this.http.post<any[]>(`${url}Region/create`, nomRegion, {
      headers: headers,
    });
  }
  
  // LISTER REGION
  listerRegions(): Observable<any> {
    const token = localStorage.getItem('token');

    return token
      ? this.http.get<any>(`${url}Region`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }

  // Méthode pour modifier les Régions 
  updateRegion(id: number, region: any): Observable<any> {
    const token = localStorage.getItem('token');

    return token
      ?
      this.http.post<any>(`${url}Region/edit/'${id}`, region, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }
}