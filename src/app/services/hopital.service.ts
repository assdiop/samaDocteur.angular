import { HttpHeaders ,HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { url } from './apiUrl';
import { of } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http: HttpClient) { }

  


 

  // Ajout Hopitaux 

  addHopitaux(newHopitaux: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    // const newRegion = { nom: nomRegion }; // Créer un nouvel objet pour la région avec la propriété nom

    return this.http.post<any[]>(`${url}hopital/create`, newHopitaux, {
      headers: headers,
    });
  }
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
  updateRegion(id: number, nomRegion: any): Observable<any> {
    const token = localStorage.getItem('token');

    return token
      ?
      this.http.post<any>(`${url}Region/edit/'${id}`, nomRegion, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }

  addLocalite(nom_localite: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    // const newRegion = { nom: nomRegion }; // Créer un nouvel objet pour la région avec la propriété nom

    return this.http.post<any[]>(`${url}localite/create`, nom_localite, {
      headers: headers,
    });
  }
  
  // 
  listerLocalites(): Observable<any> {
    const token = localStorage.getItem('token');

    return token
      ? this.http.get<any>(`${url}localite`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }



  getAllHospital(): Observable<any> {
    const token = localStorage.getItem('token');

    return token
      ? this.http.get<any>(`${url}Hopital`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }


  supprimerHopital(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return token
      ? this.http.delete<any>(`${url}Hopital/` + id, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }



  
  //      verifierChamp(title: any, text: any, icon: any) {
  //     Swal.fire({
  //       title: title,
  //       text: text,
  //       icon: icon,
  //     });
  //   }
  // }

}
