import { Component } from '@angular/core';
import { HopitalService } from 'src/app/services/hopital.service';
import Swal from 'sweetalert2';
import { Hopitaux } from 'src/app/models/hopitaux';

@Component({
  selector: 'app-gestion-hopital',
  templateUrl: './gestion-hopital.component.html',
  styleUrls: ['./gestion-hopital.component.scss']
})
export class GestionHopitalComponent {

  
  image!: File;
  nom_hopitaux = "";
  lattitudeHopitaux = "";
  longitudeHopitaux = "";
  horaireHopitaux = "";
  imageHopitaux = "";
  localite_idHopitaux = "";
  descriptionHopitaux = "";
  Hopitaux: any;
 
 

  constructor(private hopitalService:HopitalService) {}


  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    this.getAllHospitals();
    this.updateHopitals();
   
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
 


  
 addHopitaux() {
    console.log(this.nom_hopitaux);
    console.log(this.descriptionHopitaux);
    console.log(this.lattitudeHopitaux);
    console.log(this.longitudeHopitaux);
    console.log(this.horaireHopitaux);
    console.log(this.image);
    console.log(this.localite_idHopitaux);
  
    const newHopitaux = new Hopitaux;

      
   

    if (this.nom_hopitaux == "" || this.longitudeHopitaux == "" || this.lattitudeHopitaux == "" || this.horaireHopitaux == ""
      || this.localite_idHopitaux == "" || this.descriptionHopitaux == "") {
      // this.message.showMessage("error", "Veuillez remplir tout les champs");
      console.log("fdffdfd", newHopitaux);

    } else {

      let newHopitaux = new FormData();
      newHopitaux.append("image", this.image);
      newHopitaux.append("nom_hopital", this.nom_hopitaux);
      newHopitaux.append("longitude", this.longitudeHopitaux);
      newHopitaux.append("lattitude", this.lattitudeHopitaux);
      newHopitaux.append("localite_id", this.localite_idHopitaux);
      newHopitaux.append("description", this.descriptionHopitaux);
      newHopitaux.append("horaire", this.horaireHopitaux);

      
    

      this.hopitalService.addHopitaux(newHopitaux).subscribe(
        (response) => {
          console.log('Hopital ajouté avec succès.', response);
          this.alertMessage('success', 'Cool', 'Docteur ajouté avec succès');
        },
        (error) => {
          this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
          console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
        }
      );

      this.getAllHospitals();

    }
  
 }
  
  
   getAllHospitals() {
   this.hopitalService.getAllHospital().subscribe(
      (Hopitaux) => {
        // Afficher la liste des regions
        console.log(Hopitaux);
        this.Hopitaux = Hopitaux.hopitaux;

        console.log(this.Hopitaux);
     },
     
     

      (error) => {
        // Traiter l'erreur de liste

      }
    );
  }



  
   supprimerHopitaux(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007A64',
      cancelButtonColor: '#FF9C00',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.hopitalService.supprimerHopital(id).subscribe(() => {
          this.hopitalService.verifierChamp(
            'Supprimé!',
            'hopital supprimé avec succès',
            'success'
          );
          // this.loadProduit();
          this.ngOnInit(); // Actualise la page
        });
      }
    });
  }


  // declare id
  // id!: number = "";

  id: number = 1;
 
  chargerInfosHopital(hopital: any) {
    console.log(hopital);
    this.id = hopital.id;
    console.warn('lid de l hopital ', this.id);
    this.nom_hopitaux = hopital.nom_hopital;
    this.descriptionHopitaux = hopital.description;
    this.lattitudeHopitaux = hopital.lattitude;
    this.longitudeHopitaux = hopital.longitude;
    this.horaireHopitaux = hopital.horaire;
    this.image = hopital.imageHopitaux;
    this.localite_idHopitaux = hopital.localite_id;
    
    

    
    // this.image = hopital.image;
    console.log('changer', this.chargerInfosHopital);
    // this.listerDesProduits();

  }
  


  updateHopitals() {
    let formData = new FormData();
    formData.append('nom_hopital', this.nom_hopitaux);
    formData.append('description', this.descriptionHopitaux);
    formData.append('longitude', this.longitudeHopitaux);
    formData.append('lattitude', this.lattitudeHopitaux);
    formData.append('horaire', this.horaireHopitaux);
    formData.append('image', this.image);
    formData.append('localite_id', this.localite_idHopitaux);


  
    this.hopitalService.updateHopital(this.id, formData).subscribe(response => {
      console.log('modifHopital', response);
  
      // this.listerDesProduits();
    }, error => {
        console.error('Erreur lors de la mise à jour de l hopital:', error);
      });
      
    this.getAllHospitals();
    //  this.currentRegion.nomRegion = this.nom_region;
    
  
  

  }   

   
      
      

  // FilTER HOPITAL 
//   filterHopitauxByLocalite() {
//     if (this.localite_idHopitaux === '') {
//         this.getAllHospitals(); // Si aucune localité sélectionnée, récupérez tous les hôpitaux
//     } else {
//         this.hopitalService.getHopitauxByLocaliteId(this.localite_idHopitaux).subscribe(
//             (Hopitaux) => {
//                 console.log(Hopitaux);
//                 this.Hopitaux = Hopitaux.hopitaux;
//             },
//             (error) => {
//                 console.error("Une erreur s'est produite lors du filtrage des hôpitaux par localité: ", error);
//             }
//         );
//     }
// }

  filterHopitauxByLocalite() {
    if (this.localite_idHopitaux === '') {
      this.getAllHospitals();
    } else {
      const localiteId: number = parseInt(this.localite_idHopitaux, 10); // Convertir en nombre
      this.hopitalService.getHopitauxByLocaliteId(localiteId).subscribe(
        (Hopitaux) => {
          console.log(Hopitaux);
          this.Hopitaux = Hopitaux.hopitaux;
        },
        (error) => {
          console.error("Une erreur s'est produite lors du filtrage des hôpitaux par localité: ", error);
        }
      );
    }
  }
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
          }
  
   getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
}






