import { Component } from '@angular/core';
import { error } from 'jquery';
import { DocteurService } from 'src/app/services/docteur.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {

  Docteurs: any[] = [];
  Users: any[] = [];
utlisateur_id: any;
  

  ngOnInit(): void {
    this.getAlldocteurs();
    this.getAllUser();    
  }
  
  constructor(private docteurService: DocteurService) { }
  getAlldocteurs() {
    this.docteurService.listerDocteurs().subscribe(
      (response) => {
        console.log("Repose du back: ", response);
        console.log("liste ses docteurs: ", response.liste_docteur);
        this.Docteurs = response.liste_docteur;
        console.log("Mon tableau docteur: ", this.Docteurs);
      },
      (error) => {
        console.log(error);
      }
      
  )

  }


  getAllUser() {
    this.docteurService.listerUser().subscribe(
      (response) => {
        console.log("Repose du back: ", response);
        console.log("liste ses docteurs: ", response.liste_client);
        this.Users = response.liste_client;
        console.log("Mon tableau docteur: ", this.Users);
      },
      (error) => {
        console.log(error);
      }
      
  )

  }


}
