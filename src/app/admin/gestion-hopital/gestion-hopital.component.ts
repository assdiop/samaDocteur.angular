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

 
  // Déclaration des variables pour le localStorage 
  tabHopitalInit: Hopitaux[] = [];
  tabHopitaux: Hopitaux[] = [];
  tabHopitauxActifs: Hopitaux[] = [];
  tabHopitauxInactifs: Hopitaux[] = [];
  hopital_object = new Hopitaux;

  islisteHopitaux: boolean = false;
  isAjoutHopital: boolean = false;

  tabServicesInit: any[] = [
    {
      id: 1,
      nom: "Cardiologue",
      checkboxChecked: false,
    },
    {
      id: 2,
      nom: "Ophtalmologue",
      checkboxChecked: false,
    },
    {
      id: 3,
      nom: "dentiste",
      checkboxChecked: false,
    },
  ];
  // le tableau des specialiste 
  tabServices: any[] = []; // Pour récupérer le tableau des spécialistes du localstorage 

  tabOptionsChosen: any[] = [];

  lastId: number = 0;
 

  constructor(private hopitalService:HopitalService) {}


  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    // this.getAllHospitals();
    // this.updateHopitals();
   
// dtoptions
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      pageLength: 6,
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

    // On ajoute le tableau des hopitaux dans le localStorage 
    if (!localStorage.getItem("hopitaux")) {
      localStorage.setItem("hopitaux", JSON.stringify(this.tabHopitalInit) || "")
    }

    if (!localStorage.getItem("services")) {
      localStorage.setItem("services", JSON.stringify(this.tabServicesInit) || "")
    }

    // On récupère les hopitaux du localStorage
    this.tabHopitaux = JSON.parse(localStorage.getItem("hopitaux") || "");
    this.tabHopitauxActifs = this.tabHopitaux.filter(hopital => hopital.etat == 1);
    this.tabServices = JSON.parse(localStorage.getItem("services") || "");

    if(!this.tabHopitaux.length){
      this.showAddHopital();
    } else {
      this.showHopitaux();
    }
    
  }
 
  // Avec le local storage :
  // Methode pour voir la liste des hopitaux 
  showHopitaux(){
    this.islisteHopitaux= true;
    this.isAjoutHopital= false;
  }

  // Methode pour voir l'ajout d'un hopital
  showAddHopital(){
    this.isAjoutHopital= true;
    this.islisteHopitaux= false;
  }

  viderChamps(){
    // On vide les selections 
    this.tabServices.forEach(element => {
      element.checkboxChecked = false
    });
    this.hopital_object = new Hopitaux;

    // On vide le tableau des options 
    this.tabOptionsChosen = [];

    window.location.reload();
  }


  // Methode pour ajouter un  hopital
  // Validation pas encore complete 
  addHopitalFunction() {
    if(this.tabHopitaux.length){
      this.lastId = this.tabHopitaux[this.tabHopitaux.length - 1].id;      
    }
    
    this.hopital_object.services = this.tabOptionsChosen;
    console.log(this.hopital_object);

    if (this.hopital_object.nom_hopitaux && this.hopital_object.description && this.hopital_object.heure_fermeture_semaine
      && this.hopital_object.image && this.hopital_object.heure_ouverture_weekend) {
      this.hopital_object.id = this.lastId + 1;
      this.hopital_object.etat = 1;
      // On ajoute l'objet dans le tableau 
      this.tabHopitaux.push(this.hopital_object);
      this.viderChamps();
      this.alertMessage("success", "", "Hopital ajouté avec succes");
      // On met à jour le localStorage
      localStorage.setItem("hopitaux", JSON.stringify(this.tabHopitaux) || "")
    } else {
      this.alertMessage("error", "", "Veuillez remplir les donnees");
    }
    
  }



   // Variable qui stockera l hopital  cliqué
  currenthopital: any;
  // Methode pour charger les informations à modifier 
  chargerInfosContact(paramHopitaux:any){
    this.  currenthopital =paramHopitaux;
    // this.nom_hopitaux =paramHopitaux.nom_hopital;
    // this.prenom =paramHopitaux.prenomContact;
    // this.email =paramHopitaux.emailContact;
    // this.telephone =paramHopitaux.telephoneContact;
    // this.description =paramHopitaux.descriptionContact;
    this. imageHopitaux ==paramHopitaux.imageContact;
  }

  //   supprimerHopitaux(paramHopitaux:any){
  //   Swal.fire({
  //     title: "Etes-vous sur???",
  //     text: "Vous allez supprimer le contact",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Oui, je supprime!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       paramHopitaux.etat = 0;
  //       // On met à jour le tableau qui est stocké dans le localStorage 
  //       localStorage.setItem("Users", JSON.stringify(this.tabHopitaux));
  //       this.verifierChamps("Contact supprimer!", "", "success");     
        
  //     }
  //   });
  //   // alert(paramContact.etatContact);
    
  // }
  // Méthode pour enregistré les options choisies dans le tableau tabOptionsChosen
  checkSpecialiste(event: any, nom:any) {
    let checkboxChecked = event.target.checked;
    let added: boolean = false; //Variable permettant de vérifier si le nom a été ajouté

    // On vérifie si l'élément est sélectionné et on l'ajoute dans le tableau des sépcialistes
    if(checkboxChecked){
      this.tabOptionsChosen.push(nom);

    } else if(checkboxChecked == false){ // Si le nom est ajouter et on veut le décocher
      let index = this.tabOptionsChosen.indexOf(nom);
      console.log("L'index de l'element dans le tableau ", index);
      
      this.tabOptionsChosen.splice(index, 1);
      // console.log(this.tabOptionsChosen);
      
    }
    // console.log("Le status de ", nom);    
    // console.log(checkboxChecked);
    
  }
  // Méthode pour ajouter les spécialité de l'hopital


  //Méthode pour supprimer un hopital avec le localStorage
  
     supprimerHopital(paramHopital:any){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez supprimer le contact",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
      if (result.isConfirmed) {
        paramHopital.etat = 0;
        // On met à jour le tableau qui est stocké dans le localStorage 
        localStorage.setItem("hopitaux", JSON.stringify(this.tabHopitaux));
        // this.verifierChamps("Contact supprimer!", "", "success");     
        
      }
      this.showHopitaux();
    });
    // alert(paramContact.etatContact);
    
  }













  
//  addHopitaux() {
//     console.log(this.nom_hopitaux);
//     console.log(this.descriptionHopitaux);
//     console.log(this.lattitudeHopitaux);
//     console.log(this.longitudeHopitaux);
//     console.log(this.horaireHopitaux);
//     console.log(this.image);
//     console.log(this.localite_idHopitaux);
  
//     const newHopitaux = new Hopitaux;

      
   

//     if (this.nom_hopitaux == "" || this.longitudeHopitaux == "" || this.lattitudeHopitaux == "" || this.horaireHopitaux == ""
//       || this.localite_idHopitaux == "" || this.descriptionHopitaux == "") {
//       // this.message.showMessage("error", "Veuillez remplir tout les champs");
//       console.log("fdffdfd", newHopitaux);

//     } else {

//       let newHopitaux = new FormData();
//       newHopitaux.append("image", this.image);
//       newHopitaux.append("nom_hopital", this.nom_hopitaux);
//       newHopitaux.append("longitude", this.longitudeHopitaux);
//       newHopitaux.append("lattitude", this.lattitudeHopitaux);
//       newHopitaux.append("localite_id", this.localite_idHopitaux);
//       newHopitaux.append("description", this.descriptionHopitaux);
//       newHopitaux.append("horaire", this.horaireHopitaux);

      
    

//       this.hopitalService.addHopitaux(newHopitaux).subscribe(
//         (response) => {
//           console.log('Hopital ajouté avec succès.', response);
//           this.alertMessage('success', 'Cool', 'Docteur ajouté avec succès');
//         },
//         (error) => {
//           this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
//           console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
//         }
//       );

//       this.getAllHospitals();

//     }
  
//  }
  
  
//    getAllHospitals() {
//    this.hopitalService.getAllHospital().subscribe(
//       (Hopitaux) => {
//         // Afficher la liste des regions
//         console.log(Hopitaux);
//         this.Hopitaux = Hopitaux.hopitaux;

//         console.log(this.Hopitaux);
//      },
     
     

//       (error) => {
//         // Traiter l'erreur de liste

//       }
//     );
//   }



  
//    supprimerHopitaux(id: number) {
//     Swal.fire({
//       title: 'Êtes-vous sûr?',
//       text: 'Vous ne pourrez pas revenir en arrière après cette action!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#007A64',
//       cancelButtonColor: '#FF9C00',
//       confirmButtonText: 'Oui, supprimer!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.hopitalService.supprimerHopital(id).subscribe(() => {
//           this.hopitalService.verifierChamp(
//             'Supprimé!',
//             'hopital supprimé avec succès',
//             'success'
//           );
//           // this.loadProduit();
//           this.ngOnInit(); // Actualise la page
//         });
//       }
//     });
//   }


  // declare id
  // id!: number = "";

  // id: number = 1;
 
  // chargerInfosHopital(hopital: any) {
  //   console.log(hopital);
  //   this.id = hopital.id;
  //   console.warn('lid de l hopital ', this.id);
  //   this.nom_hopitaux = hopital.nom_hopital;
  //   this.descriptionHopitaux = hopital.description;
  //   this.lattitudeHopitaux = hopital.lattitude;
  //   this.longitudeHopitaux = hopital.longitude;
  //   this.horaireHopitaux = hopital.horaire;
  //   this.image = hopital.imageHopitaux;
  //   this.localite_idHopitaux = hopital.localite_id;
    
    

    
  //   // this.image = hopital.image;
  //   console.log('changer', this.chargerInfosHopital);
  //   // this.listerDesProduits();

  // }
  


  // updateHopitals() {
  //   let formData = new FormData();
  //   formData.append('nom_hopital', this.nom_hopitaux);
  //   formData.append('description', this.descriptionHopitaux);
  //   formData.append('longitude', this.longitudeHopitaux);
  //   formData.append('lattitude', this.lattitudeHopitaux);
  //   formData.append('horaire', this.horaireHopitaux);
  //   formData.append('image', this.image);
  //   formData.append('localite_id', this.localite_idHopitaux);


  
  //   this.hopitalService.updateHopital(this.id, formData).subscribe(response => {
  //     console.log('modifHopital', response);
  
  //     // this.listerDesProduits();
  //   }, error => {
  //       console.error('Erreur lors de la mise à jour de l hopital:', error);
  //     });
      
  //   this.getAllHospitals();
  //   //  this.currentRegion.nomRegion = this.nom_region;
    
  
  

  // }   

   
      
      

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

  // filterHopitauxByLocalite() {
  //   if (this.localite_idHopitaux === '') {
  //     this.getAllHospitals();
  //   } else {
  //     const localiteId: number = parseInt(this.localite_idHopitaux, 10); // Convertir en nombre
  //     this.hopitalService.getHopitauxByLocaliteId(localiteId).subscribe(
  //       (Hopitaux) => {
  //         console.log(Hopitaux);
  //         this.Hopitaux = Hopitaux.hopitaux;
  //       },
  //       (error) => {
  //         console.error("Une erreur s'est produite lors du filtrage des hôpitaux par localité: ", error);
  //       }
  //     );
  //   }
  // }
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
  
  //  getFile(event: any) {
  //   console.warn(event.target.files[0]);
  //   this.image = event.target.files[0] as File;
  // }
}






