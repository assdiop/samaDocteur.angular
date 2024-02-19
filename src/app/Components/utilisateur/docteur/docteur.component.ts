import { Component } from '@angular/core';
import { DocteurService } from 'src/app/services/docteur.service';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.scss']
})
export class DocteurComponent {
  
     Docteurs: any[] = [];
  specialite: any[] = [];
  constructor (private docteurService:DocteurService) {}

   getAllDocteur() {
  
    this.docteurService.listerDocteurs().subscribe(
      (Docteurs) => {
        // Afficher la liste des annonces
        console.log(Docteurs);
        this.Docteurs = Docteurs.liste_docteur;

        console.log(this.Docteurs);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }


}
