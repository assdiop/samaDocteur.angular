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

  
  //variable
  AllmentorData: any = '' ;
  AllArticle: any;
  articles: any;

  currentMentorElt: any;

  // public AllmentorDataLength: number = 0 ;
  prenomDocteur= ""
  nomDocteur = "";
  emailDocteur= "";
  telephoneDocteur = "";
  nombre_annee_experienceDocteur= 0;
  photo_profil_Docteur= "";
  diplomeDocteur ="" ;
  passwordDocteur = "";
  numero_licenceDocteur = "";
  ageDocteur = "";
  annnee_experience = "";
  specialite = "";
  photo_profilDocteur="";
  sexeDocteur = "";
  roleDocteur = "";
  // adresseDocteur = "";

  // pour la modication
  // prenomMentorUpdate = ""
  // nomMentorUpdate = "";
  // emailMentorUpdate = "";
  // telephoneMentorUpdate = "";
  // nombre_annee_experienceMentorUpdate = 0;
  // photo_profil_MentorUpdate = "";
  // article_idMentorUpdate =1 ;
  // passwordMentorUpdate = "";
  // messageService: any;
  // sexeDocteur="";
  // photo_profilDocteur = "";
  // adresse = "";


  // descriptionMentor = "";


  constructor(private docteurService: DocteurService , private messageService: MessageService) {
  }

  ngOnInit(): void {
    // this.afficher();
    // this.getAllArtilce()
  }

  // getAllArtilce(){
  //   this.metierService.getAllArticle().subscribe(
  //     (data) => {
  //       this.AllArticle = data;
  //      this.articles = this.AllArticle.article;

  //     }
  //   );
  // }

  // afficher() {
  //   this.docteurService.getAllMentors().subscribe((data) => {
  //     this.AllmentorData = data;
  //     console.log(this.AllmentorData.Mentor.length);
  //   });
  // }

  Docteur() {
    console.log(this.nomDocteur);
    console.log(this.prenomDocteur);
    console.log(this.emailDocteur);
    console.log(this.passwordDocteur);
   
    console.log(this.telephoneDocteur);
    console.log(this.Docteur);
    console.log(this.sexeDocteur);
    console.log(this.adresseDocteur);
    console.log(this.diplomeDocteur);
    console.log(this.specialiteDocteur);
    console.log(this.nombre_annee_experienceDocteur);
    console.log(this. numero_licenceDocteur);



    const newDocteur = new Docteur;
    

    newDocteur.nom = this.nomDocteur
    newDocteur.prenom = this.prenomDocteur;
    newDocteur.email = this.emailDocteur;
    newDocteur.password = this.passwordDocteur;
    newDocteur.photo_profil = this.photo_profilDocteur;
    newDocteur.telephone = this.telephoneDocteur;
    newDocteur.age = this.ageDocteur;
    newDocteur.sexe = this.sexeDocteur;
    newDocteur.specialite_id = this.specialite;
    // newClient. specialite_id = this. specialiteDocteur;
    newDocteur.numero_licence = this.numero_licenceDocteur;
    newDocteur.role_id = this.roleDocteur;

    
    // newClient.nombre_annee_experience= this.nombre_annee_experienceDocteur;
    // newClient.adresse= this.adresseDocteur;


   

    if (this.emailDocteur == "" || this.passwordDocteur == "" || this.prenomDocteur == "" || this.nomDocteur == ""
      || this.telephoneDocteur == "" || this.ageDocteur == "" || this.sexeDocteur == "") {
      // this.message.showMessage("error", "Veuillez remplir tout les champs");
      console.log("fdffdfd", newDocteur);

    } else {



      let formData = new FormData();
      formData.append("photo_profil", this.photo_profilDocteur);
      formData.append("nom ", this.nomDocteur);
      formData.append("email", this.emailDocteur);
      formData.append("password", this.passwordDocteur);
      formData.append("role_id", this.roleDocteur);
      formData.append("telephone", this.telephoneDocteur);
      formData.append("age", this.ageDocteur);
      formData.append("diplome", this.diplomeDocteur);
      formData.append("annee_expereince", this.annnee_experience );
      formData.append("specialite", this. specialite );
      formData.append("numero_licence", this.numero_licenceDocteur);
      formData.append("age", this.ageDocteur);
   


      

      
      //   this.docteurService.Docteur(newDocteur).subscribe((response) => {
      //   console.log("voir inscription", response);
      // })


      
      this.docteurService.registerDocteur(newDocteur).subscribe(
        (repose) => {console.log("voir inscription", repose);
      })
      // this.docteurService.Docteur(newDocteur).subscribe((response: any) => {
      //   console.log("voir inscription", response:any);
      // })
    
       this.alertMessage(
                'success',
                'Super',
                'Inscription réussie avec succés.'
              );
    }

    

    
  }
  
  numLicenceDocteur(arg0: string, numLicenceDocteur: any) {
    throw new Error('Method not implemented.');
  }
  specialiteDocteur(specialiteDocteur: any) {
    throw new Error('Method not implemented.');
  }
  adresseDocteur(adresseDocteur: any) {
    throw new Error('Method not implemented.');
  }


  addUser() {
    
    if (this.nomDocteur == "" || this.emailDocteur == "" || this.passwordDocteur== "" || this.telephoneDocteur == "" || this.nombre_annee_experienceDocteur == null || this.numero_licenceDocteur == null) {
      this.messageService.showMessage("error", "Veuillez remplir tout les champs")
    } else {
      this.docteurService.addUser(new Docteur, (reponse: any) => {
        console.log(reponse);
        if (reponse.status_code == 200) {
          this.messageService.showMessage("success", "Ajout faite avec succès");

          //vider les champs
       
          this.nomDocteur = "";
          this.prenomDocteur="";
         this.emailDocteur="";
         this.passwordDocteur="";
         this.telephoneDocteur="";
          this.numero_licenceDocteur = "";
          // this.descriptionMentor = "";
          // console.log(reponse);
        } else { 
          // this.messageService.showMessage("error", "veuillez vérifiez ce que vous avez saisie");
          // console.log(reponse);
        }
      });
      }
  }

  // getMentorById(id: number){
  //   this.docteurService.getMentorById(id).subscribe(
  //     (data)=>{
  //       this.currentMentorElt = data;
  //       console.log(this.currentMentorElt, 'aze');

  //       this.prenomMentorUpdate = this.currentMentorElt.mentor.nom;
  //       this.nomMentorUpdate = "";
  //       this.emailMentorUpdate = this.currentMentorElt.mentor.email;
  //       this.telephoneMentorUpdate = this.currentMentorElt.mentor.telephone;
  //       this.nombre_annee_experienceMentorUpdate = this.currentMentorElt.mentor.nombre_annee_experience;
  //       this.photo_profil_MentorUpdate = this.currentMentorElt.mentor.photo_profil;
  //       this.article_idMentorUpdate =this.currentMentorElt.mentor.articles_id ;
  //       // this.passwordMentorUpdate = this.currentMentorElt.mentor.password ;
  //     }
  //   );
  //   // alert(id)
  // }



  // updateMentor(id: number){
  //   const mentorToUpdate = new Docteur;

  //   mentorToUpdate.nom = this.prenomMentorUpdate + " " + this.nomMentorUpdate;
  //   mentorToUpdate.email = this.emailMentorUpdate;
  //   mentorToUpdate.photo_profil = this.photo_profil_MentorUpdate;
  //   mentorToUpdate.password = this.passwordMentorUpdate;
  //   mentorToUpdate.telephone = this.telephoneMentorUpdate;
  //   mentorToUpdate.nombre_annee_experience = this.nombre_annee_experienceMentorUpdate;
  //   mentorToUpdate.articles_id = this.article_idMentorUpdate;

  //   if (this.emailMentorUpdate == "" || this.telephoneMentorUpdate == "" || this.nombre_annee_experienceMentorUpdate == null) {
  //     this.messageService.showMessage("error", "Veuillez remplir tous les champs")
  //   }else{

  //     this.docteruService.updateMentor(mentorToUpdate, id).subscribe(
  //       (data)=> {
  //         console.log(data);

  //       }
  //     );
  //   }

  // }

  // archiveMentorById(id: number) {
  //   const mentor = new Mentor(); // Vous pouvez également récupérer les données du mentor si nécessaire

  //   Swal.fire({
  //     title: "Etes vous sûr?",
  //     text: "de vouloir archiver",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Oui, Je confirme"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Archiver!",
  //         text: "Ce mentor a été archiver avec succées ",
  //         icon: "success"
  //       });

  //       this.docteruService.archiveMentor(id, mentor).subscribe(
  //         (response) => {
  //           this.AllmentorData;
  //         },
  //         (error) => {
  //           console.error('Erreur lors de l\'archivage du mentor', error);

  //         }
  //       );
  //     }
  //   });


  // }


    getFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }

  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
}





