import { Component } from '@angular/core';
import { HopitalService } from 'src/app/services/hopital.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';
import { Localite } from 'src/app/models/localite';

@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls: ['./localite.component.scss']
})
export class LocaliteComponent {



  nom_localite = "";
  region_id = "";
  code_postal = "";
  Localites: any;

  LocaliteSelectionner:any
  constructor(private hopitalService:HopitalService) {
   
  }
  
   dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    this.addLocalite();
    this.getAllLocalite();
    //  this.getAllLocalite();
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


  addLocalite() {
    let data = {
      nom_localite: this.nom_localite,
      code_postal: this.code_postal,
      region_id: this.region_id

    }
    if (this.nom_localite == "") {
      alert("veuiller remplir le champ")
    } else {
      this.hopitalService.addLocalite(data).subscribe((repose) => {
        console.log("voir Localite", repose);
      })
    }
 

  }

  // lister localiter 

  getAllLocalite() {
   this.hopitalService.listerLocalites().subscribe(
      (Localites) => {
        // Afficher la liste des regions
        console.log(this.Localites);

        this.Localites = Localites.localite;
       

        console.log(this.Localites);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }

}
