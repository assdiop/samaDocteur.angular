import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }



    // methode pour avoir le nombre total d inscrit dans la plateforme


    
    getTotalPatients(): Observable<number> {
      return this.http.get<number>(`${url}client/Totalclient`);
      
      
  }
}
