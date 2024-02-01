import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { GestionCommentaireComponent } from './gestion-commentaire/gestion-commentaire.component';
import { GestionDocteurComponent } from './gestion-docteur/gestion-docteur.component';
import { GestionHopitauxComponent } from './gestion-hopitaux/gestion-hopitaux.component';
import { GestionPatientComponent } from './gestion-patient/gestion-patient.component';
import { GestionComptesUserComponent } from './gestion-comptes-user/gestion-comptes-user.component';

// import { LogoutAdminComponent } from './logout-admin/logout-admin.component';




@NgModule({
  declarations: [
    NavbarComponent,
   GestionCommentaireComponent,
    GestionDocteurComponent,
    GestionHopitauxComponent,
    GestionPatientComponent,
    GestionComptesUserComponent,
   
   
  ],
  imports: [CommonModule,
    RouterModule,
    AdminRoutingModule,
    // DataTablesModule,
    FormsModule],
  // providers: [ListeUsersService],
})
export class AdminModule {}
