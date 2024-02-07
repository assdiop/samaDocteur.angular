import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {



  
  changeForm = true;
  
  email: string = '';
  password: string = '';
  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  nomRegister = "";
  prenomRegister = "";
  emailRegister = "";
  passwordRegister = "";
  statutRegister = "";
  telephoneRegister = "";
  parcourInputRegister = "";
  adresseRegister = "";
  sexeRegister = "";
  switchFormValue = true;
  photo_profilRegister!: File;
  roleRegister = "";
  ageRegister = "";
  diplomeRegister = "";
  specialiteRegister = "";
  numLicenceRegister="";
  anneeExpRgister="" ;

  //   userConnected: any;

  constructor(private authentificationservice: AuthentificationService, private message: MessageService, private route: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.nomRegister);
    console.log(this.prenomRegister);
    console.log(this.emailRegister);
    console.log(this.passwordRegister);
    console.log(this.photo_profilRegister);
    console.log(this.telephoneRegister);
    console.log(this.ageRegister);
    console.log(this.sexeRegister);
    console.log(this.adresseRegister);
    console.log(this.diplomeRegister);
    console.log(this.specialiteRegister);
    console.log(this.anneeExpRgister);
    console.log(this.numLicenceRegister);



    const newClient = new User;
    

    newClient.nom = this.nomRegister;
    newClient.prenom = this.prenomRegister;
    newClient.email = this.emailRegister;
    newClient.password = this.passwordRegister;
    newClient.photo_profil = this.photo_profilRegister;
    newClient.role_id = this.roleRegister;
    newClient.telephone = this.telephoneRegister;
    newClient.age = this.ageRegister;
    newClient.sexe = this.sexeRegister;
    newClient.specialite = this.specialiteRegister;
    newClient.numero_licence = this.numLicenceRegister;
    newClient.annee_experience = this.anneeExpRgister;
    newClient.adresse= this.adresseRegister;


   

    if (this.emailRegister == "" || this.passwordRegister == "" || this.prenomRegister == "" || this.nomRegister == ""
      || this.telephoneRegister == "" || this.roleRegister == "" || this.ageRegister == "" || this.sexeRegister == "") {
      this.message.showMessage("error", "Veuillez remplir tout les champs");
      console.log("fdffdfd", newClient);

    } else {



      let formData = new FormData();
      formData.append("photo_profil", this.photo_profilRegister);
      formData.append("nom ", this.nomRegister);
      formData.append("email", this.emailRegister);
      formData.append("password", this.passwordRegister);
      formData.append("role_id", this.roleRegister);
      formData.append("telephone", this.roleRegister);
      formData.append("age", this.ageRegister);
      formData.append("diplome", this.diplomeRegister);
      formData.append("annee_expereince", this.anneeExpRgister);
      formData.append("specialite", this.specialiteRegister);
      formData.append("numero_licence", this.numLicenceRegister);
      

      

      this.authentificationservice.register(newClient).subscribe((repose) => {
        console.log("voir inscription", repose);
      })
    
       this.alertMessage(
                'success',
                'Super',
                'Inscription réussie avec succés.'
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


  
  switchForm() {
    this.switchFormValue = !this.switchFormValue;
  }
  
  changForm() {
      this.changeForm = !this.changeForm ;
  }
  

  // getFile(event: any) {
  //   console.warn(event.target.files[0]);
  //  this.photo_profilRegister = event.target.files[0] as File;
  // }



    getFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }

}





