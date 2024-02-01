import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  
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
    console.log(this.adresseRegister)


    const newClient = new User;
    

    newClient.nom = this.nomRegister
    newClient.prenom = this.prenomRegister;
    newClient.email = this.emailRegister;
    newClient.password = this.passwordRegister;
    newClient.photo_profil = this.photo_profilRegister;
    newClient.role_id = this.roleRegister;
    newClient.telephone = this.telephoneRegister;
    newClient.age = this.ageRegister;
    newClient.sexe = this.sexeRegister;
    newClient.adresse = this.adresseRegister

    



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
      formData.append("sexe", this.sexeRegister);
      

      this.authentificationservice.register(newClient).subscribe((repose) => {
        console.log("voir inscription", repose);
      })
    
      
    }

    

    
  }


  login(): void {
    console.log(this.email);
    console.log(this.password);

    if (this.email == '') {
      this.alertMessage(
        'error',
        'Attention',
        'Merci de renseigner votre email'
      );
    } else if (!this.email.match(this.emailPattern)) {
      this.alertMessage(
        'error',
        'Attention',
        'Merci de renseigner un email valide'
      );
    } else {
      this.authentificationservice.login(this.email, this.password).subscribe(
        (response) => {
          console.log(response);
          this.alertMessage("success", "Bravo", "Connexion réussie")


          // Si la connexion réussit, stocker la réponse dans le local storage, y compris le token
          localStorage.setItem('token', response.authorization.token); // Stocker le token

          const userdata = localStorage.getItem('currentUser');

          const userConnectedRole = userdata ? JSON.parse(userdata).role : null;
          console.log(userConnectedRole);

          // Rediriger l'utilisateur vers une autre page

          switch (response.user.nom) {
            case 'admin':
              this.route.navigate(['/admin']);
              this.alertMessage(
                'success',
                'Super',
                'Connexion réussie avec succés.'
              );
              break;
            case 'proprietaire':
              this.route.navigate(['/docteur']);
              this.alertMessage(
                'success',
                'Super',
                'Connexion réussie avec succés.'
              );
              break;
            case 'acheteur':
              this.route.navigate(['/accueil']);
              this.alertMessage(
                'success',
                'Super',
                'Connexion réussie avec succés.'
              );
              break;
            default:
              // Redirection par défaut si le rôle n'est pas reconnu
              this.route.navigate(['/accueil']);
                
          }

        },
        (error) => {
          // En cas d'erreur, afficher un message d'erreur
          this.alertMessage(
            'error',
            'Erreur',
            'Connexion échouée. Veuillez vérifier vos identifiants.'
          );
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


  


  





