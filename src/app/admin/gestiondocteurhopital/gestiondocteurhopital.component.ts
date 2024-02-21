import { Component } from '@angular/core';
import { DocteurHopital } from 'src/app/models/docteurHopital';
import { HopitalService } from 'src/app/services/hopital.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestiondocteurhopital',
  templateUrl: './gestiondocteurhopital.component.html',
  styleUrls: ['./gestiondocteurhopital.component.scss']
})
export class GestiondocteurhopitalComponent {
  
  docteur_id = "";
  hopitals_id = "";
   Docteurs : any;
   
 
 

  constructor(private hopitalService: HopitalService, private messageService :MessageService) {}


  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    // this.getAllHospitals();
    // // this.updateHopitals();
    // //  this.addRegion() 
    //  this.getAllRegions();
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
 


  
 addDocteurHopital() {
   
  
    const newHopitaux = new DocteurHopital;

       let data = {
         docteur_id: this.docteur_id,
         hopitals_id : this.hopitals_id

         
    }
   

    if (this.docteur_id =='' || this.hopitals_id =='') {
       this.messageService.showMessage("error", "Veuillez remplir tout les champs");
      console.log("fdffdfd", newHopitaux);

    } else {

      
    

      this.hopitalService.addDocteurHopital(data).subscribe(
        (response) => {
          console.log('Docteur ajouté avec succès.', response);
          //  this.messageService.showMessage('success', 'Cool', 'Docteur ajouté avec succès');
        },
        (error) => {
          // this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
          console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
        }
      );


      // this.getAllHospitals();

    }
  
 }
  
  
  getAllHospitalDocteur() {
     
   this.hopitalService.getAllHospital().subscribe(
      ( Docteurs) => {
        // Afficher la liste des regions
        console.log(Docteurs);
        this.Docteurs = Docteurs.hopitaux;

        console.log(this.Docteurs);
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

}
