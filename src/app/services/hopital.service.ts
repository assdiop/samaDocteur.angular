import { HttpHeaders ,HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { url } from './apiUrl';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { DocteurHopital } from '../models/docteurHopital';


@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  verifierChamps(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  
    verifierChamp(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }


 

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



    /** POST: ajoute un nouveau docteur sur le serveur */
  // addDocteur(docteur: DocteurHopital): Observable<DocteurHopital> {
  //   return this.http.post<DocteurHopital>(this.apiUrl, docteur, this.httpOptions)
  //     .pipe(
  //       catchError(this.handleError<DocteurHopital>('addDocteur'))
  //     );
  // }


    addDocteurHopital(data: any): Observable<any[]> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    // const newRegion = { nom: nomRegion }; // Créer un nouvel objet pour la région avec la propriété nom

    return this.http.post<any[]>(`${url}ajouterDocteurHopital`, data, {
      headers: headers,
    });
  }
  // Méthode pour modifier les Régions 
  // updateRegion(id: number, nomRegion: any): Observable<any> {
  //   const token = localStorage.getItem('token');

  //   return token
  //     ?
  //     this.http.post<any>(`${url}Region/edit/'${id}`, nomRegion, {
  //       headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
  //     })
  //     : of(null);
  // }


  // Methode pour modifier Region

    updateRegion(id: number, region:any): Observable<any> {
    const token = localStorage.getItem('token');
      return token ?
        this.http.post<any>(`${url}Region/edit/${id}`, region, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
        }) : of(null);
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



  //   getAllHospitalDocteur(): Observable<any> {
  //   const token = localStorage.getItem('token');

  //   return token
  //     ? this.http.get<any>(`${url}Hopital`, {
  //       headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
  //     })
  //     : of(null);
  // }


  
// Methode pour supprimer Hopital

  supprimerHopital(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return token
      ? this.http.delete<any>(`${url}Hopital/` + id, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      : of(null);
  }


  // Mehode pour lister les hopitaux totaux 
  
  
  // getTotalHopitaux(): Observable<number> {
  //   const token = localStorage.getItem('token');

  //   return token
  //     ? this.http.get<number>(`${url}Hopital/totalHopitaux`, {
  //       headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
  //     })
  //     : of(null);
  // }


    getTotalHopitaux(): Observable<number> {
    return this.http.get<number>(`${url}Hopital/totalHopitaux`);
  }




  // Update hopital 
    
    updateHopital(id: number, Hopitaux:any): Observable<any> {
    const token = localStorage.getItem('token');
      return token ?
        this.http.post<any>(`${url}Hopital/edit/${id}`, Hopitaux, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      }) : of(null);}

  

  // methode pour filter 





    getHopitauxByLocaliteId(id: number): Observable<any> {
    return this.http.get<any>(`${url}localitehopital/${id}`);
  }
}



