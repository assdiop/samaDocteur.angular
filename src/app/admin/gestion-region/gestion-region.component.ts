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
  nom_region!: string;
  // nom_region = "";
  Regions: any;
  // currentRegion: any;
  currentRegion: any = {};
 
  regionSelectionner: any
  constructor(private hopitalService: HopitalService) {
   
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
      // alert("veuiller remplir le champ")
    } else {
      this.hopitalService.addRegion(data).subscribe((repose) => {
        console.log("voir Region", repose);
      })
      this.getAllRegions();
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
  
  
  //  chargerInfosContact(paramContact:any){
  //   this.currentContact = paramContact;
  //   this.nom = paramContact.nomContact;
  //   this.prenom = paramContact.prenomContact;
  //   this.email = paramContact.emailContact;
  //   this.telephone = paramContact.telephoneContact;
  //   this.description = paramContact.descriptionContact;
  //   this.imageUrl = paramContact.imageContact;
  // }
  // Methode pour vider les champs 
  // viderChapmsRegion(){
  //   this.nom_region = ""
   
  // }
  // Methode pour veirfier champs 

  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
  // Méthode pour Modifier Région


  //récupère les données
  // declare id
  id: number = 0;
 
  // chargerInfosRegion(Region: any) {
  //   console.log(Region);
  //   this.id = Region.id;
  //   console.warn('voir l id recuperer ', this.id);
  //   this.nom_region = Region.nom_region;
  //   console.log('changer', this.chargerInfosRegion);
  //   this.getAllRegions();

  // }

   
  updateRegion() {
    let data = {
      nom_region:this.nom_region
      
    }
  //  this.currentRegion.nomRegion = this.nom_region;
    this.hopitalService.updateRegion(this.regionSelectionner, data)
      .subscribe(response => {
        console.log('Region mise à jour avec succès:', response);
        // Rafraîchissez la liste des régions ou effectuez d'autres actions nécessaires après la mise à jour
      }, error => {
        console.error('Erreur lors de la mise à jour de la région:', error);
      });
    this.getAllRegions();
  }



  // this.hopitalService.updateProduit(this.id, formData).subscribe((response) => {
  //   console.log('modifProduit', response);
  //   this.listerDesProduits();
  // }


  

    

}