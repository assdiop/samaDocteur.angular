import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout-admin',
  templateUrl: './logout-admin.component.html',
  styleUrls: ['./logout-admin.component.css'],
})
export class LogoutAdminComponent {
  constructor(
    private authentificationService: AuthentificationService,
    private route: Router
  ) {}

  logout(): void {

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0F42A8',
      cancelButtonColor: 'black',
      confirmButtonText: 'Oui, me déconnecter',
    }).then((result) => {
      if (result.isConfirmed) {

        this.authentificationService.logout().subscribe(
          (response) => {
            console.log(response);
            console.log('Déconnexion réussie');
            // Rediriger ou effectuer d'autres actions après la déconnexion
            this.route.navigate(['/login']);
            this.alertMessage(
              'success',
              'réussie',
              'Vous vous etes déconnecté avec succés'
            );
          },
          (error) => {
            console.error('Erreur lors de la déconnexion :', error);
            this.alertMessage(
              'error',
              'Error',
              'Erreur lors de la déconnexion'
            );
          }
        );
      }
    });

  }


  // alert message
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
}
