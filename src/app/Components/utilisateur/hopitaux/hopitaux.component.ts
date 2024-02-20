import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../../../services/hopital.service';



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

  searchTerm: string = '';


  
    selectedLocaliteId!: number;

  hopitaux: any[] = [];  //liste des hôpitaux
  localite: any[] = [];
  localiteSelectionnee: string = '';
  localite_idHopitaux!: string;

  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {
    this.getAllHospitals();
  }

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


  // filtrerParLocalite(localite: string): void {
  //   this.localiteSelectionnee = localite;
  // }
}
