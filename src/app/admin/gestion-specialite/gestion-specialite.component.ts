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
   currentSpecialite: any = {};
 
    specialiteSelectionner:any
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
      // alert("veuiller remplir le champ")
    } else {
      this.docteurService.addSpecialite(data).subscribe((repose) => {
        console.log("voir Specilaiter", repose);
        this.getAllSpecialites();
      })
    }
 

  }
  // Lister les Regions
  
   getAllSpecialites() {
   this.docteurService.listerSpecialiste().subscribe(
      (Specialites) => {
        // Afficher la liste des specilaites
        console.log(Specialites);
        this.Specialites = Specialites.specialite;

        console.log(this.Specialites);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }


  
 
  // chargerInfosSpecialite(Specialites: any) {
  //   console.log(Specialites);
  //   this.specialiteSelectionner = Specialites.id;
  //   console.warn('voir l id recuperer ', this.specialiteSelectionner);
  //   this.nom_specialite = Specialites.nom_specialite;
  //   console.log('changer', this.chargerInfosSpecialite);
  //   // this.getAllSpecialites();

  // }

  
   id:number = 0;

   // Méthode pour charger les donnés du formulaire 
  chargerInfosSpecialite(specialite: any) {
    this.specialiteSelectionner =specialite.id;
    console.log('esxrcdftygu', this.specialiteSelectionner);
    this.nom_specialite = specialite.nom_specialite;

    
   
  }
  
  updateSpecialite() {
    let data = {
    nom_specialite:this.nom_specialite
      
    }
  //  this.currentRegion.nomRegion = this.nom_region;
    this.docteurService.updateSpecialite(this.specialiteSelectionner, data)
      .subscribe(response => {
        console.log('Region mise à jour avec succès:', response);
        // Rafraîchissez la liste des régions ou effectuez d'autres actions nécessaires après la mise à jour
      }, error => {
        console.error('Erreur lors de la mise à jour de la région:', error);
      });
    this.getAllSpecialites();
  }



  // Methode pour veirfier champs 

    verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
    }
  
  
  
  supprimerSpecialite(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#017D03',
      cancelButtonColor: '#FF9C00',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.docteurService.supprimerSpecialites(id).subscribe(() => {
          this.docteurService.verifierChamp(
            'Supprimé!',
            'annonce supprimé avec succès',
            'success'
          );
          // this.loadProduit();
          this.ngOnInit(); // Actualise la page
        });
      }
    });
  }
}
