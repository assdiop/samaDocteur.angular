import { Component } from '@angular/core';
import { HopitalService } from 'src/app/services/hopital.service';
import { Region } from 'src/app/models/Region';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-region',
  templateUrl: './gestion-region.component.html',
  styleUrls: ['./gestion-region.component.scss']
})
export class GestionRegionComponent {
  nom_region!:string;
  Regions: any;
  currentRegion: any;
 
  regionSelectionner:any
  constructor(private hopitalService:HopitalService) {
   
  }
  
   dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

     this.addRegion() 
     this.getAllRegions();
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
  addRegion() {
    let data = {
      nom_region: this.nom_region
    }
    if (this.nom_region == "") {
      alert("veuiller remplir le champ")
    } else {
      this.hopitalService.addRegion(data).subscribe((repose) => {
        console.log("voir Region", repose);
      })
    }
 

  }
  // Lister les Regions
  
   getAllRegions() {
   this.hopitalService.listerRegions().subscribe(
      (Regions) => {
        // Afficher la liste des regions
        console.log(Regions);
        this.Regions = Regions.Region;

        console.log(this.Regions);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }


// Méthode pour charger les donnés du formulaire 
    chargerInfosTest(region: any) {
    this.regionSelectionner = region.id;
    console.log('esxrcdftygu', this.regionSelectionner);
    this.nom_region = region.nom_region;
   
    }
  
  
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
  // Méthode pour Modifier Région

  // fonction pour modifier
  

    

     modifierRegion(id:number){
    this.currentRegion.nomRegion = this.nom_region;
    
    
    Swal.fire({
     title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#017D03',
      cancelButtonColor: '#FF9C00',
      confirmButtonText: 'Oui, modifie!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.hopitalService
          .updateRegion(this.currentRegion,id)
          .subscribe((response) => {
            console.log('je suis response', response);
            this.hopitalService.verifierChamps(
              'modifie!',
              'region modifie avec succès',
              'success'
            );
            window.location.reload();
          });
        this.ngOnInit();
      }
      console.log('je suis region', this.regionSelectionner);
      console.log('je suis data', data);
});
   
       
 const data = {
   nom: this.nom_region,
      
    };
  } 


  }


  

    

