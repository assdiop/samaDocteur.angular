import { Component, OnInit } from '@angular/core';
import { Docteur } from 'src/app/models/docteur';
import { DocteurService } from 'src/app/services/docteur.service';
 import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-docteur',
  templateUrl: './gestion-docteur.component.html',
  styleUrls: ['./gestion-docteur.component.scss']

})
export class GestionDocteurComponent {
  Docteurs: any;
  
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
 

  constructor(private docteurService: DocteurService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    // methode listeer docteur 
    this.getAllDocteur()
   
  }

  addDocteur() {
    if (!this.nomDocteur || !this.numero_licenceDocteur || !this.specialite_id) {
      this.alertMessage('error', 'Oops', 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    let newDocteur = new FormData();
    newDocteur.append('prenom', this.prenomDocteur);
    newDocteur.append('nom', this.nomDocteur);
    newDocteur.append('role_id', this.roleDocteur);
    newDocteur.append('age', this.ageDocteur);
    newDocteur.append('specialite_id', this.specialite_id);
    newDocteur.append('adresse', this.adresseDocteur);
    newDocteur.append('sexe', this.sexeDocteur);
    newDocteur.append('numero_licence', this.numero_licenceDocteur);
    newDocteur.append('annee_experience', this.nombre_annee_experienceDocteur);
    newDocteur.append('telephoneDocteur', this.telephoneDocteur);
    newDocteur.append('email', this.emailDocteur);
    newDocteur.append('password', this.passwordDocteur);
    newDocteur.append('diplome', this.diplomeDocteur);
    
    newDocteur.append('image', this.photo_profilDocteur as unknown as Blob);

    this.docteurService.addDocteur(newDocteur).subscribe(
      (response) => {
        console.log('Docteur ajouté avec succès.', response);
        this.alertMessage('success', 'Cool', 'Docteur ajouté avec succès');
      },
      (error) => {
        this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
        console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
      }
    );
  }

  
  
  //  charger les donnees 
  // chargerInfosTest(docteur: any) {
  //   this.docteurSelectionner = docteur.id;
  //   console.log('esxrcdftygu', this.docteurSelectionner);
  //   this.specialite_id = docteur.specialite_id;
  //   this.diplomeDocteur = docteur.diplomeDocteur;
  //   this.annee_experience = docteur.annee_experience;
  //   // this.image = docteur.image;
  // }
  

  // Méthode pour lister les docteurs
  getAllDocteur() {
  
    this.docteurService.listerDocteurs().subscribe(
      (Docteurs) => {
        // Afficher la liste des annonces
        console.log(Docteurs);
        this.Docteurs = Docteurs.liste_docteur;

        console.log(this.Docteurs);
      },

      (error) => {
        // Traiter l'erreur de liste
      }
    );
  }

  //   getFile(event: any) {
  //   const file = event.target.files[0];
  //   console.log(file);
  // }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.diplomeDocteur = event.target.files[0] as File;
  }

  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }


  // methode pour supprimer 

  supprimerDocteur(id: number) {
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
        this.docteurService.supprimerDocteur(id).subscribe(() => {
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