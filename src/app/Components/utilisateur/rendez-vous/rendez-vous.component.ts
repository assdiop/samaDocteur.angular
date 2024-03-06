import { Component,OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendezvous';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import Swal from 'sweetalert2';
// import { Date } from '@angular/common';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent {

  //  rendezVousList: RendezVous[] = [];
  newRendezVous: RendezVous = { id: 0, date: '', heure: '', descriptiondubesoin: '',etat:0};
  // Déclaration des variables pour le localStorage
  tabRendezVousInit: RendezVous[] = [];
  tabRendezVous: RendezVous[] = [];
  tabRendezVousConfirmer: RendezVous[] = [];
  tabRendezVousAnnuler: RendezVous[] = [];
  tabRendezVousEnAttente:RendezVous [] = [];
  
  isListeRendezVous: boolean = false;
  isAjoutRendezVous: boolean = true;
  lastId: number = 0;

  //  rendez_vous_object = new RendezVous;

  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    // this.loadRendezVous();
    if (!localStorage.getItem("rendez-vous")) {
      localStorage.setItem("rendez-vous", JSON.stringify(this.tabRendezVousInit) || "")
    }

    // On récupère les rendezvous du localStorage
    this.tabRendezVous = JSON.parse(localStorage.getItem("rendezvous") || "");
    if (!this.tabRendezVous.length) {
      this.ajoutRendezVous();
    } else {
      this.listeRendezVous();
    }
  }
  // methode pour voir l ajout d un rv
    ajoutRendezVous(){
      this.isAjoutRendezVous = true;
      this.isListeRendezVous = false;
  }

  // Méthode pour voir la liste des rdvs
  listeRendezVous() {
    this.isListeRendezVous = true;
    this.isAjoutRendezVous = false;
  }

  // viderChamps() {
    
  // }

  // ajout rendezvous avec le localStorage
  

  addRendezVousFunction() {
    if (this.tabRendezVous.length) {
      this.lastId = this.tabRendezVous[this.tabRendezVous.length - 1].id;
    }

    if (this.newRendezVous.date && this.newRendezVous.descriptiondubesoin && this.newRendezVous.heure)   {
      this.newRendezVous.id = this.lastId + 1;
      this.newRendezVous.etat = 1
      // On ajoute l objet dans le local Staorage 
      this.tabRendezVous.push(this.newRendezVous);
      this.alertMessage("success", "", "Rendez-vous prise  avec succés");
      localStorage.setItem("rendezvous", JSON.stringify(this.tabRendezVous) || "")
    } else {
        this.alertMessage("error", "", "Veuiller remplir les champs ");
      }

    
  }



  // loadRendezVous(): void {
  //   this.rendezVousService.getAllRendezVous()
  //     .subscribe(rendezVousList => this.rendezVousList = rendezVousList);
  // }
// ajout avec l api 
  // addRendezVous(): void {
  //   this.rendezVousService.addRendezVous(this.newRendezVous)
  //     .subscribe((respons) => {
  //       console.log("voirrrrr", respons);
        
        
  //       // this.loadRendezVous();
  //       this.newRendezVous = {
  //         id: 0,
  //         date: '',
  //         heure: '',
  //         descriptiondubesoin: '',
  //         docteur_hopitals_id: 0
  //       }; // Réinitialiser le formulaire
  //     });
  // }


  //   viderChamps(){
  //   // On vide les selections 
  //   this.tabh.forEach(element => {
  //     element.checkboxChecked = false
  //   });
  //   this.hopital_object = new Hopitaux;

  //   // On vide le tableau des options 
  //   this.tabOptionsChosen = [];

  //   window.location.reload();
  // }

  // updateRendezVous(rendezVous: RendezVous): void {
  //   this.rendezVousService.updateRendezVous(rendezVous)
  //     // .subscribe(() => this.loadRendezVous());
  // }

  // deleteRendezVous(id: number): void {
  //   this.rendezVousService.deleteRendezVous(id)
  //     // .subscribe(() => this.loadRendezVous());
  // }

  
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 3000,
      timerProgressBar: true
    });
  }
}

