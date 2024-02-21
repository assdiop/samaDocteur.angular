import { Component } from '@angular/core';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.scss']
})
export class GestionRendezVousComponent {



  
  rdv: any;
  rendezvous: any;
  constructor(private rendervousSeervice:RendezVousService) {}

  

    dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

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
  // 

  getAllRendezVous(){
    this.rendervousSeervice. getAllRendezVous().subscribe(
      ( rendezvous:any) => {
        // Afficher la liste des regions
        this.rendezvous= rendezvous.rdv;
        console.log("les rendezvous:", this.rendezvous);

        // console.log(this.Hopitaux);
      },
     
     

      (error) => {
        // Traiter l'erreur de liste

      }
    );
  }



}
