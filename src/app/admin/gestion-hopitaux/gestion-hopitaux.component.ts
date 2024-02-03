import { Component } from '@angular/core';
import { Hopitaux } from 'src/app/models/hopitaux';

@Component({
  selector: 'app-gestion-hopitaux',
  templateUrl: './gestion-hopitaux.component.html',
  styleUrls: ['./gestion-hopitaux.component.scss']
})
export class GestionHopitauxComponent {






nom_hopitaux= "";
descriptionHopitaux= "";
 lattitudeHopitaux = "";
 longitudeHopitaux = "";
 horaireHopitaux= "";
  imageHopitaux = "";
  localite_idHopitaux = "";


  
  
  
    Hopitaux() {
    // console.log(this.nom_hopitaux);
    // console.log(this.description);
    // console.log(this.lattitude);
    // console.log(this. longitude);
    // console.log(this. horaire);
    // console.log(this.image );
    // console.log(this. localite_id );
  
    const newDocteur = new Hopitaux;
    

      newDocteur.nom_hopitaux = this.nom_hopitaux;
    newDocteur.longitude = this.longitudeHopitaux;
    newDocteur.lattitude = this.lattitudeHopitaux;
    newDocteur.horaire = this.horaireHopitaux;
    
   newDocteur.localite_id = this.localite_idHopitaux;
    newDocteur.description = this.descriptionHopitaux;
      


    
    // newClient.nombre_annee_experience= this.nombre_annee_experienceDocteur;
    // newClient.adresse= this.adresseDocteur;


   

    // if (this.emailDocteur == "" || this.passwordDocteur == "" || this.prenomDocteur == "" || this.nomDocteur == ""
    //   || this.telephoneDocteur == "" || this.ageDocteur == "" || this.sexeDocteur == "") {
    //   // this.message.showMessage("error", "Veuillez remplir tout les champs");
    //   console.log("fdffdfd", newDocteur);

    // } else {



      // let formData = new FormData();
      // formData.append("photo_profil", this.photo_profilDocteur);
      // formData.append("nom ", this.nomDocteur);
      // formData.append("email", this.emailDocteur);
      // formData.append("password", this.passwordDocteur);
      // formData.append("role_id", this.roleDocteur);
      // formData.append("telephone", this.telephoneDocteur);
      // formData.append("age", this.ageDocteur);
      // formData.append("diplome", this.diplomeDocteur);
      // formData.append("annee_expereince", this.annnee_experience );
      // formData.append("specialite", this. specialite );
      // formData.append("numero_licence", this.numero_licenceDocteur);
      // formData.append("age", this.ageDocteur);
   


      

      
      //   this.docteurService.Docteur(newDocteur).subscribe((response) => {
      //   console.log("voir inscription", response);
      // })


      
      // this.docteurService.registerDocteur(newDocteur).subscribe(
      //   (repose) => {console.log("voir inscription", repose);
      // })
      // this.docteurService.Docteur(newDocteur).subscribe((response: any) => {
      //   console.log("voir inscription", response:any);
      // })
    
    //    this.alertMessage(
    //             'success',
    //             'Super',
    //             'Inscription réussie avec succés.'
    //           );
    // }

    

    
  }

    dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
  }


  
    getFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }
}
