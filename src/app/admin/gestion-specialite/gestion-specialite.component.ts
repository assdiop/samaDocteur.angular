import { Component } from '@angular/core';
import { DocteurService } from 'src/app/services/docteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-specialite',
  templateUrl: './gestion-specialite.component.html',
  styleUrls: ['./gestion-specialite.component.scss']
})
export class GestionSpecialiteComponent {


  nom_specialite = "";
  Specialites: any;
 
  regionSelectionner:any
  constructor(private docteurService :DocteurService) {
   
  }
  
   dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    this.addSpecialite();

    this.getAllSpecialites();
     
   
// dtoptions
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      pageLength: 3,
      pagingType: 'simple_numbers',
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',

        paginate: {
          first: '<<', // Personnalise le texte de la flèche pour la première page
          previous: '<', // Personnalise le texte de la flèche pour la page précédente
          next: '>', // Personnalise le texte de la flèche pour la page suivante
          last: '>>', // Personnalise le texte de la flèche pour la dernière page
        },
      },

      // drawCallback: function () {
      //   $('.dataTables_wrapper table').addClass('table-bordered'); // Ajoute une classe pour les bordures horizontales
      // },
    };
  }
 
 

  // Ajouter REGION
  addSpecialite() {
    let data = {
      nom_specialite: this.nom_specialite 
    }
    if (this.nom_specialite == "") {
      alert("veuiller remplir le champ")
    } else {
      this.docteurService.addSpecialite(data).subscribe((repose) => {
        console.log("voir Specilaiter", repose);
      })
    }
 

  }
  // Lister les Regions
  
   getAllSpecialites() {
   this.docteurService.listerSpecialiste().subscribe(
      (Specialites) => {
        // Afficher la liste des regions
        console.log(Specialites);
        this.Specialites = Specialites.specialite;

        console.log(this.Specialites);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }


// Méthode pour charger les donnés du formulaire 
    // chargerInfosTest(region: any) {
    // this.regionSelectionner = region.id;
    // console.log('esxrcdftygu', this.regionSelectionner);
    // this.nom_region = region.nom_region;
   
    // }
  
  
    // Methode pour vider les champs 
  // viderChapmsRegion(){
  //   this.nom_region = ""
   
  // }
  // Methode pour veirfier champs 

    verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
