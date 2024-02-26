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



  // Messages de validation
  validationMessages: { [key: string]: string } = {};

  // Déclaration des propriétés touched
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  nomTouched: boolean = false;
  prenomTouched: boolean = false;
  telephoneTouched: boolean = false;
  ageToucched: boolean = false;
  nomToucched: boolean = false;

  // Déclaration des propriétés Empty
  emailEmpty: boolean = false;
  passwordEmpty: boolean = false;

  // emailregex pattern
  emailPattern =
    /^[A-Za-z]+[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
   
  // regex password
  passwordRegex: RegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=!])(.{8,})$/;


  //   userConnected: any;

  constructor(private authentificationservice: AuthentificationService, private message: MessageService, private route: Router) { }

  ngOnInit(): void {
  }

  register() {
    // console.log(this.nomRegister);
    // console.log(this.prenomRegister);
    // console.log(this.emailRegister);
    // console.log(this.passwordRegister);
    // console.log(this.photo_profilRegister);
    // console.log(this.telephoneRegister);
    // console.log(this.ageRegister);
    // console.log(this.sexeRegister);
    // console.log(this.adresseRegister)


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
         this.alertMessage(
                'success',
                'Super',
                'Inscription réussie avec succés.'
              );
      })
    

      
      
    }



    

    
  }




  login(): void {
    console.log(this.email);
    console.log(this.password);

    //  this.validateFormLogin();

      // Appeler la méthode validateFormLogin
    if (this.validateFormLogin()) {
      // Appeler la méthode registerProprietaire seulement si la validation réussit
      this.registerClient();
    }
  }

  // validation form login
  validateFormLogin() {
    let isValid = true;
    isValid = this.validateEmail() && isValid;
    isValid = this.validatePassword() && isValid;
    return isValid;
  }


   registerClient() {
    this.authentificationservice.login(this.email, this.password).subscribe(
      (response) => {
        console.log(response);

        // Si la connexion réussit, stocker la réponse dans le local storage, y compris le token
        localStorage.setItem('token', response.token); // Stocker le token

        const userdata = localStorage.getItem('currentUser');

        const userConnectedRole = userdata ? JSON.parse(userdata).role_id : null;
        console.log(userConnectedRole);

        // Rediriger l'utilisateur vers une autre page

        switch (response.user.role_id) {
          case 1:
            this.route.navigate(['/admin']);
            this.alertMessage(
              'success',
              'Connecté',
              'Connexion réussie avec succés.'
            );
            break;
          case 2:
            this.route.navigate(['/acceuil']);
            // Dans votre méthode registerProprietaire(), entourez le code de redirection avec NgZone
            // this.ngZone.run(() => {
              
            // });
            this.alertMessage(
              'success',
              'Super',
              'Connexion réussie avec succés.'
            );
            break;
          case 3:
            this.route.navigate(['/accueil_docteur']);
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

    

    // if (this.email == '') {
    //   this.alertMessage(
    //     'error',
    //     'Attention',
    //     'Merci de renseigner votre email'
    //   );
    // } else if (!this.email.match(this.emailPattern)) {
    //   this.alertMessage(
    //     'error',
    //     'Attention',
    //     'Merci de renseigner un email valide'
    //   );
//     } else {
//       this.authentificationservice.login(this.email, this.password).subscribe(
//         (response) => {
//           console.log(response);
//           this.alertMessage("success", "Bravo", "Connexion réussie")


//           // Si la connexion réussit, stocker la réponse dans le local storage, y compris le token
//           localStorage.setItem('token', response.authorization.token); // Stocker le token

//           const userdata = localStorage.getItem('currentUser');

//           const userConnectedRole = userdata ? JSON.parse(userdata).role_id
//  : null;
//           console.log("uuuuuuu",userConnectedRole);

//           // Rediriger l'utilisateur vers une autre page

//           console.log("voir vobjet recuperer", response.user.nom);
//           switch (response.user.role_id
// ) {
//             case 1:
//               this.route.navigate(['/admin']);
//               this.alertMessage(
//                 'success',
//                 'Super',
//                 'Connexion réussie avec succés.'
//               );
//               break;
//             case 2:
//               this.route.navigate(['/acceuil']);
//               this.alertMessage(
//                 'success',
//                 'Super',
//                 'Connexion réussie avec succés.'
//               );
//               break;
//             case 3:
//               this.route.navigate(['/accueil_docteur']);
//               this.alertMessage(
//                 'success',
//                 'Super',
//                 'Connexion réussie avec succés.'
//               );
//               break;
//             default:
//               // Redirection par défaut si le rôle n'est pas reconnu
//               this.route.navigate(['/accueil']);
                
//           }

//         },
//         (error) => {
//           // En cas d'erreur, afficher un message d'erreur
//           this.alertMessage(
//             'error',
//             'Erreur',
//             'Connexion échouée. Veuillez vérifier vos identifiants.'
//           );
//         }
//       );
//     }
//    }



    // validation form login
  // validateFormLogin() {
  //   let isValid = true;
  //   isValid = this.validateEmail() && isValid;
  //   isValid = this.validatePassword() && isValid;
  //   return isValid;
  // }

  // Validation email
  // validateEmail(): boolean {
  //   if (!this.email) {
  //     this.validationMessages['email'] = "L'email est requis";
  //     this.emailEmpty = true; // Mettre à jour emailEmpty si le champ est vide
  //     return false;
  //   } else if (!this.emailPattern.test(this.email)) {
  //     this.validationMessages['email'] = 'Email invalide';
  //     this.emailEmpty = false;
  //     return false;
  //   } else {
  //     this.validationMessages['email'] = '';
  //     this.emailEmpty = false;
  //     return true;
  //   }
  // }
  // Méthode de validation pour le mot de passe
  // validatePassword() {
  //   if (!this.password) {
  //     this.validationMessages['password'] = 'Le mot de passe est requis';
  //     this.passwordEmpty = true;
  //     return false;
  //   } else if (!this.passwordRegex.test(this.password)) {
  //     this.validationMessages['password'] =
  //       'Le mot de passe doit contenir au moins 6 caractères';
  //     this.passwordEmpty = false;
  //     return false;
  //   } else {
  //     this.validationMessages['password'] = '';
  //     this.passwordEmpty = false;
  //     return true;
  //   }
  // }


    // Validation email
  validateEmail(): boolean {
    if (!this.email) {
      this.validationMessages['email'] = "L'email est requis";
      this.emailEmpty = true; // Mettre à jour emailEmpty si le champ est vide
      return false;
    } else if (!this.emailPattern.test(this.email)) {
      this.validationMessages['email'] = 'Veuillez entrer un email valide';
      this.emailEmpty = false;
      return false;
    } else {
      this.validationMessages['email'] = '';
      this.emailEmpty = false;
      return true;
    }
  }

  // Méthode de validation pour le mot de passe
  validatePassword() {
    if (!this.password) {
      this.validationMessages['password'] = 'Le mot de passe est requis';
      this.passwordEmpty = true;
      return false;
    } else if (!this.passwordRegex.test(this.password)) {
      this.validationMessages['password'] =
        'Le mot de passe doit contenir  au moins 8 caractères avec un caractère spécial, une lettre majuscule, une lettre minuscule et un chiffre.';
      this.passwordEmpty = false;
      return false;
    } else {
      this.validationMessages['password'] = '';
      this.passwordEmpty = false;
      return true;
    }
  }
alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        timer: 2000, // Durée en millisecondes avant la disparition
        timerProgressBar: true, // Barre de progression de la temporisation
        showConfirmButton: false // Cacher le bouton de confirmation
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


  


  





