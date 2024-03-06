import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../../../services/hopital.service';
import { Hopitaux } from 'src/app/models/hopitaux';
import { Docteur } from 'src/app/models/docteur';
import { RendezVous } from 'src/app/models/rendezvous';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-hopitaux',
  templateUrl: './hopitaux.component.html',
  styleUrls: ['./hopitaux.component.scss']
})
export class HopitauxComponent implements OnInit {

  //  selectedLocality: string = ''; // Variable pour stocker la localité sélectionnée
  // localities: string[] = ['Pikine', 'Guédiawaye', 'Parcelle Assainie', 'Grand Yoff', 'Ouakam', 'Plateau']; // Liste des localités disponibles
  // Hopitaux: any[] = []; // Liste des hôpitaux
 
    filteredHospitals: any[] = []; // Liste des hôpitaux filtrés par localité

  searchTerm: string = '';   //variable qui permet de faire la reechche 

  // variable por la prise de rendez vous
   newRendezVous: RendezVous = { id: 0, date: '', heure: '', descriptiondubesoin: '',etat:0};
  // Déclaration des variables pour le localStorage
  tabRendezVousInit: RendezVous[] = [];
  tabRendezVous: RendezVous[] = [];
  
  selectedLocaliteId!: number;

  hopitaux: any[] = [];  //liste des hôpitaux
  localite: any[] = [];
  localiteSelectionnee: string = '';
  localite_idHopitaux!: string;
  lastId!: number;



  // Les variables pour le localstorage 
  tabHopitauxActifs: Hopitaux[] = []; // liste des hopitaux actifs
  tabHopitauxFiltered: Hopitaux[] = []; // liste des hopitaux actifs
  tabTypeHopitaux: Hopitaux[] = []; // liste des hopitaux filtrer selon le type
  
  tabDocteursActifs: Docteur[] = [] //liste des docteurs de tout les docteurs
  tabDocteursHopital: Docteur[] = [] //liste des docteurs de l'hopital
  hopital_object = new Hopitaux;

  // Voir la liste des hopitaux 
  isListeHopitaux: boolean = true;
  isListeMedecin: boolean = false;

  filtervalue: string = ""; //Recupère la saisie lors de la recherche
  tabMedecinsFiltered: Docteur[] = [];

  filteredType: string = ""; //Récupère le type sélectionné


  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {
    this.getAllHospitals();

    // On récurère les hopitaux dans le localStorage 
    let hopitaux = JSON.parse(localStorage.getItem("hopitaux") || "");
    if (hopitaux) {
      this.tabHopitauxActifs = hopitaux.filter((hopital: any) => hopital.etat == 1);
      this.tabTypeHopitaux = this.tabHopitauxFiltered = this.tabHopitauxActifs;
    }

    // On récurère les docteurs dans le localStorage 
    let docteurs = JSON.parse(localStorage.getItem("docteurs") || "");
    if (docteurs) {
      this.tabDocteursActifs = docteurs.filter((docteur: any) => docteur.etat == 1);
    }
  }

  search() {
    // Recherche pour les hopitaux 
    this.tabHopitauxFiltered = this.tabTypeHopitaux.filter((hopital:Hopitaux) => hopital.nom_hopitaux.toLowerCase().includes(this.filtervalue.toLowerCase()) || hopital.adresse.toLowerCase().includes(this.filtervalue.toLowerCase()))
    this.tabMedecinsFiltered = this.tabDocteursHopital.filter((docteur:any)=> docteur.nom.toLowerCase().includes(this.filtervalue.toLowerCase()) || docteur.prenom.toLowerCase().includes(this.filtervalue.toLowerCase())  || docteur.service_docteur.toLowerCase().includes(this.filtervalue.toLowerCase()));
  }
  
  filterTypeFunction() {
    console.log(this.filteredType);
    if (this.filteredType && this.filteredType != "tout") {
      this.tabHopitauxFiltered = this.tabHopitauxActifs.filter((hopital: Hopitaux) => hopital.type == this.filteredType);
    } else {
      this.tabHopitauxFiltered = this.tabHopitauxActifs;
    }
    this.tabTypeHopitaux = this.tabHopitauxFiltered; // stocke le resultat du filtre
  }

  // les methodes avec le localstorage
  // methode pour voir la liste des hoppitaux 
  showHopitaux() {    
    this.isListeHopitaux= true;
    this.isListeMedecin = false;
    this.filtervalue = "";
  }

  // Mzthode pour voir le liste des medicins de l'hopital sélectionnée 
  showMedecin() {    
    this.isListeHopitaux= false;
    this.isListeMedecin = true;
    this.filtervalue = "";
  }

  // L'hopital selectionée pour voir ses services 
  getservicesHopital(hopital: any) {
    this.hopital_object = hopital;
    console.log(this.hopital_object.services);
  }

  // On récupère docteurs de l'hopital 
  getDocteursHopital(hopital: any) {
    this.showMedecin();
    this.hopital_object = hopital;
    this.tabDocteursHopital = this.tabDocteursActifs.filter((docteur: any) => docteur.hopital_id == hopital.id);
    this.tabMedecinsFiltered = this.tabDocteursHopital;
  }
  


  // Les methodes avec l'api 
  Hopitaux: any[] = [];

  
    onSelectLocalite(localiteId: number): void {
    this.selectedLocaliteId = localiteId;
  }

  getHospitalsByLocality(locality: string) {
    this.filteredHospitals = this.Hopitaux.filter(hopital => hopital.locality === locality);
  }

  id: number = 1;
      getHopitauxByLocaliteId() {
    this.hopitalService.getHopitauxByLocaliteId(this.id).subscribe(
      (Hopitaux) => {
        this.Hopitaux = Hopitaux; // Mettre à jour la liste des hôpitaux avec les données reçues
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
  searchHospital() {
    if (this.searchTerm.trim() !== '') {
      console.log('voirnsaisie',this.searchTerm);
      this.filteredHospitals = this.Hopitaux.filter(hopitaux =>
        hopitaux.nom_hopital.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredHospitals = this.Hopitaux;
    }
  }



  
  // Méthode pour prendre rendezvous
  
    addRendezVousFunction() {
    if (this.tabRendezVous.length) {
      this.lastId = this.tabRendezVous[this.tabRendezVous.length - 1].id;
    }

      
      // Récupérer les données utilisateur depuis le stockage local
const userdata = localStorage.getItem('currentUser');

// Vérifier si des données utilisateur sont présentes dans le stockage local
if (userdata) {
    // Convertir les données JSON en objet JavaScript
    const currentUser = JSON.parse(userdata);
    
    // Accéder à la propriété correspondante (par exemple, l'ID de l'utilisateur)
    const userId = currentUser.id;
    
    // Utiliser l'ID de l'utilisateur comme nécessaire
    console.log("ID de l'utilisateur connecté :", userId);
} else {
    console.log("Aucune donnée utilisateur trouvée dans le stockage local.");
}
    if (this.newRendezVous.date && this.newRendezVous.descriptiondubesoin && this.newRendezVous.heure)   {
      this.newRendezVous.id = this.lastId + 1;
      this.newRendezVous.etat = 1;
      // On ajoute l objet dans le local Staorage 
      this.tabRendezVous.push(this.newRendezVous);
      this.alertMessage("success", "", "RendezVous prise   avec succés");
      localStorage.setItem("rendezvous", JSON.stringify(this.tabRendezVous) || "")
    } else {
        this.alertMessage("error", "", "Veuiller remplir les champs ");
      }

    
  }



  
  // Méthode pour filtrer les hôpitaux en fonction de la localité sélectionnée
  // filterHospitals() {
  //   // Si aucune localité n'est sélectionnée, afficher tous les hôpitaux
  //   if (this.selectedLocality === '') {
  //     this.getAllHospitals();
  //   } else {
  //     // Sinon, filtrer les hôpitaux en fonction de la localité sélectionnée
  //     this.Hopitaux = this.Hopitaux.filter(hopital => hopital.locality === this.selectedLocality);
  //   }
  // }

 // Méthode pour filtrer les hôpitaux par localité
  // filterHospitalsByLocality(locality: string) {
  //   this.filteredHospitals = this.Hopitaux.filter(hopital => hopital.locality === locality);
  // }

  // filterHopitauxByLocalite(localiteId: number) {
  //   this.hopitalService.getHopitauxByLocaliteId(localiteId).subscribe(
  //     (Hopitaux) => {
  //       console.log(Hopitaux);
  //       this.Hopitaux = Hopitaux.hopitaux;
  //     },
  //     (error) => {
  //       console.error("Une erreur s'est produite lors du filtrage des hôpitaux par localité: ", error);
  //     }
  //   );
  // }
  getAllHospitals() {
    this.hopitalService.getAllHospital().subscribe(
      (Hopitaux) => {
        // Afficher la liste des regions
        this.Hopitaux = Hopitaux.hopitaux;
        console.log("les hopitaux:", this.Hopitaux);

        // console.log(this.Hopitaux);
      },
     
     

      (error) => {
        // Traiter l'erreur de liste

      }
    );
  }

   alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 3000,
      timerProgressBar: true
    });
  }


  // filtrerParLocalite(localite: string): void {
  //   this.localiteSelectionnee = localite;
  // }
}
