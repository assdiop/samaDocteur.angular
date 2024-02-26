import { Component, OnInit } from '@angular/core';
import { Docteur } from 'src/app/models/docteur';
import { Hopitaux } from 'src/app/models/hopitaux';
import { DocteurService } from 'src/app/services/docteur.service';
 import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-docteur',
  templateUrl: './gestion-docteur.component.html',
  styleUrls: ['./gestion-docteur.component.scss']

})
export class GestionDocteurComponent {
  
Docteurs: any[] = [];
docteurSelectionner: any = {
    
  };
  prenomDocteur = ""
  nomDocteur = "";
  emailDocteur = "";
  telephoneDocteur = "";
  nombre_annee_experienceDocteur = "";
  photo_profil_Docteur = "";
  diplomeDocteur: any;
  passwordDocteur = "";
  numero_licenceDocteur = "";
  ageDocteur = "";
  // specialite = "";
  photo_profilDocteur = "";
  sexeDocteur = "";
  roleDocteur = "";
  adresseDocteur = "";
  specialite_id = "";
  annee_experience = "";
  numero_licence = 0;
  role="Admin"

  islisteDocteurs: boolean = false;
  isAjoutDocteur: boolean = false;

  // Le tableau des hopitaux 
  tabHopitaux: Hopitaux[] = [];
  tabServices: any[] = [];
 
  docteur_object = new Docteur;
  tabInitial: Docteur[] = [];
  tabDocteurs: Docteur[] = [];
  tabDocteursActifs: Docteur[] = [];

  tabServicesHopital: any[] = [];

  lastId: number = 0;
  

  constructor(private docteurService: DocteurService, private messageService: MessageService) {
  }

    dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    // methode listeer docteur 
    // this.addDocteur();
    // this.getAllDocteur();
    // this.supprimerDocteur(id);
    // proprietes datatables 
      this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      pageLength: 8,
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

    // On initial le tableau des docteurs dans le localStorage 
    if(!localStorage.getItem("docteurs")){
      localStorage.setItem("docteurs", JSON.stringify(this.tabInitial));
    }

    // On récupère les hopitaux du localStorage
    this.tabHopitaux = JSON.parse(localStorage.getItem("hopitaux") || "");
    this.tabServices = JSON.parse(localStorage.getItem("services") || "");
    this.tabDocteurs = JSON.parse(localStorage.getItem("docteurs") || "");
  
    this.getDocteursActifs();

    if(!this.tabDocteurs.length){
      this.showAddDocteur();
    } else {
      this.showDocteurs();
    }
  }

  getDocteursActifs() {
    this.tabDocteursActifs = this.tabDocteurs.filter(docteur => docteur.etat == 1);
  }

  // Avec le local storage :
  // Methode pour voir la liste des hopitaux 
  showDocteurs(){
    this.islisteDocteurs= true;
    this.isAjoutDocteur= false;
  }

  // Methode pour voir l'ajout d'un hopital
  showAddDocteur(){
    this.isAjoutDocteur= true;
    this.islisteDocteurs= false;
  }

  // Methode pour récupérer la liste des services de l'hopital sélectionné 
  getServicesHopital(hopitalId: any) {
    // console.log(hopital);
    let hopitalFind = this.tabHopitaux.find(hopital => hopital.id == hopitalId);
    // console.log(hopitalFind);

    if (hopitalFind) {
      // console.log(hopitalFind.services);
      this.tabServicesHopital = hopitalFind.services;  
      // console.log(this.tabServicesHopital);
    }

  }

  // Validation pas encore complete
  // Methode pour ajouter un docteur 
  addDocteurFunction(){
    if(this.tabDocteurs.length){
      this.lastId = this.tabDocteurs[this.tabDocteurs.length - 1].id;      
    }

    console.log(this.docteur_object);
    if (this.docteur_object.nom && this.docteur_object.prenom && this.docteur_object.adresse && this.docteur_object.age && this.docteur_object.telephone
       && this.docteur_object.adresse && this.docteur_object.password) {
      this.docteur_object.id = this.lastId + 1;
      this.docteur_object.etat = 1;
      this.tabDocteurs.push(this.docteur_object);
      this.viderChamps();
      localStorage.setItem("docteurs", JSON.stringify(this.tabDocteurs));
      this.alertMessage("success", "", "Docteur ajouté avec succes");
      this.getDocteursActifs();
    }else {
      this.alertMessage("error", "", "Veuillez remplir les donnees");
    }
    
  }

  viderChamps(){
    this.docteur_object = new Docteur;
  }

  getSpecialiteName(idSpecialite:any){
    let specialiteFound = this.tabServices.find((service:any) => service.id == idSpecialite);
    return specialiteFound.nom;
  }
 

    // charger les donnees 
  chargerInfosTest(docteur: any) {
    this.docteurSelectionner = docteur.id;
    console.log('esxrcdftygu', this.docteurSelectionner);
  
    this.nomDocteur = docteur.nom;
    this.prenomDocteur = docteur.prenom;
    this.ageDocteur = docteur.age;
    this.sexeDocteur = docteur.sexe;
    this.telephoneDocteur = docteur.telephone;
    this.passwordDocteur = docteur.password;
    this.adresseDocteur = docteur.adresse;
    this.photo_profilDocteur = docteur.photoProfil;
    this.nombre_annee_experienceDocteur = docteur.annee_experience;
    this.specialite_id = docteur.specialite;
  
  
   
    
console.log("verifier si les donnees sont chrages :",this.chargerInfosTest);
    // this.image = docteur.image;
  }
currentDocteur:any
  
  modifierDocteur(){
    this.currentDocteur.nom = this.nomDocteur;
    this.currentDocteur.prenom = this.prenomDocteur;
    this.currentDocteur.email = this.emailDocteur;
    this.currentDocteur.telephone = this.telephoneDocteur;
    // this.currentDocteur.descriptionContact = this.;
    // this.currentDocteur.image = this.;
    this.currentDocteur.sexe = this.sexeDocteur;
    this.currentDocteur.adresse = this.adresseDocteur;
    this.currentDocteur.age = this.ageDocteur;
    this.currentDocteur.photo_profil = this.photo_profilDocteur;
    this.currentDocteur.nombre_annee_experience = this.nombre_annee_experienceDocteur;
    this.currentDocteur.specialite = this.specialite_id;



        
    // La date de derniere modification
    // this.docteur.updateAt = new Date();
    // // La personne qui a modifier le contact
     
    // this.currentContact.updateBy = this.userConnect.email; 
    
    // On met à jour le tableau qui est stocké dans le localStorage 
    localStorage.setItem("docteurs", JSON.stringify(this.tabDocteurs));
    // this.verifierChamps("Mofication réussie!", "", "success"); 
    // this.viderChapms();
  } 
  // addDocteur() {
  //   if (!this.nomDocteur || !this.numero_licenceDocteur || !this.specialite_id) {
  //     // this.alertMessage('error', 'Oops', 'Veuillez remplir tous les champs obligatoires.');
  //     return;
  //   }

  //   let newDocteur = new FormData();
  //   newDocteur.append('prenom', this.prenomDocteur);
  //   newDocteur.append('nom', this.nomDocteur);
  //   newDocteur.append('role_id', this.roleDocteur);
  //   newDocteur.append('age', this.ageDocteur);
  //   newDocteur.append('specialite_id', this.specialite_id);
  //   newDocteur.append('adresse', this.adresseDocteur);
  //   newDocteur.append('sexe', this.sexeDocteur);
  //   newDocteur.append('numero_licence', this.numero_licenceDocteur);
  //   newDocteur.append('annee_experience', this.nombre_annee_experienceDocteur);
  //   newDocteur.append('telephoneDocteur', this.telephoneDocteur);
  //   newDocteur.append('email', this.emailDocteur);
  //   newDocteur.append('password', this.passwordDocteur);
  //   newDocteur.append('diplome', this.diplomeDocteur);
    
  //   newDocteur.append('image', this.photo_profilDocteur as unknown as Blob);

  //   this.docteurService.addDocteur(newDocteur).subscribe(
  //     (response) => {
  //       console.log('Docteur ajouté avec succès.', response);
       
  //       // // this.alertMessage('success', 'Cool', 'Docteur ajouté avec succès');
  //       //  this.getAllDocteur();

  //     },
  //     (error) => {
  //       // this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
  //       console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
  //     }
  //   );

  //   this.getAllDocteur();
  // }

  

  //  charger les donnees 
//   chargerInfosTest(docteur: any) {
//     this.docteurSelectionner = docteur.id;
//     console.log('esxrcdftygu', this.docteurSelectionner);
  
//     this.nomDocteur = docteur.nom;
//     this.prenomDocteur = docteur.prenom;
//     this.ageDocteur = docteur.age;
//     this.sexeDocteur = docteur.sexe;
//     this.diplomeDocteur = docteur.diplomeDocteur;
//     this.telephoneDocteur = docteur.telephone;
//     this.roleDocteur = docteur.role_id;  // à enlever 
//     this.emailDocteur = docteur.email;
//     this.passwordDocteur = docteur.password;
//     this.adresseDocteur = docteur.adresse;
//     this.photo_profilDocteur = docteur.photoProfil;
//     this.numero_licenceDocteur = docteur.numero_licence;
//     this.nombre_annee_experienceDocteur = docteur.annee_experience;
//     this.diplomeDocteur = docteur.diplome;
//     this.specialite_id = docteur.specialite;
  
  
   
    
// console.log("verifier si les donnees sont chrages :",this.chargerInfosTest);
//     // this.image = docteur.image;
//   }
  

  // Méthode pour modifier un Docteur 
  //  updateDocteur() {
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


  // Méthode pour lister les docteurs
  getAllDocteur() {
  
    this.docteurService.listerDocteurs().subscribe(
      (Docteurs) => {
        // Afficher la liste des annonces
        console.log(Docteurs);
        this.Docteurs = Docteurs.listedocteur;

        console.log("la liste des docteurs:", this.Docteurs);
        // const identifiantDocteurs = Docteurs.listedocteur.nom;
        // console.log("les identifinants du docteur:",identifiantDocteurs);
      },

      (error) => {
        // Traiter l'erreur de liste
        console.log(error);
      }
    );
  }

  //   getFile(event: any) {
  //   const file = event.target.files[0];
  //   console.log(file);
  // }

  // getFile(event: any) {
  //   console.warn(event.target.files[0]);
  //   this.diplomeDocteur = event.target.files[0] as File;
  // }

  alertMessage(icon: any, title: any, text: any) {
      Swal.fire({
          icon: icon,
          title: title,
          text: text,
          timer: 3000, // Durée en millisecondes avant la disparition
          timerProgressBar: true, // Barre de progression de la temporisation
          showConfirmButton: false // Cacher le bouton de confirmation
      });
  }

  // supprimer docteur via localstorage
   supprimerDocteur(paramdocteur:any){
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
        paramdocteur.etat = 0;
        // On met à jour le tableau qui est stocké dans le localStorage 
        localStorage.setItem("docteurs", JSON.stringify(this.tabDocteurs));
        // this.verifierChamps("Contact supprimer!", "", "success");     
        
      }
    });
    // alert(paramContact.etatContact);
    
  }



  //  supprimerDocteur(id:number) {
  //   Swal.fire({
  //     title: 'Êtes-vous sûr?',
  //     text: 'Vous ne pourrez pas revenir en arrière après cette action!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#017D03',
  //     cancelButtonColor: '#FF9C00',
  //     confirmButtonText: 'Oui, supprimer!',
  //     // timer: 2000, // Durée en millisecondes avant la disparition
  //     // timerProgressBar: true, // Barre de progression de la temporisation
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.docteurService.supprimerDocteur(id).subscribe((response) => {
  //         console.log(response);
  //         this.docteurService.verifierChamp(
  //           'Supprimé!',
  //           'docteur supprimé avec succès',
  //           'success'
  //         );
  //         // this.loadProduit();
  //         // this.ngOnInit(); // Actualise la page

  //         //  this.getAllSpecialites();
  //         // this.getAllDocteur();
  //         this.getAllDocteur(); 
  //       });
  //     }
  //   });
  // }


}