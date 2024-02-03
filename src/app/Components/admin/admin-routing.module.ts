import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { GestionCommentaireComponent } from './gestion-commentaire/gestion-commentaire.component';
import { GestionDocteurComponent } from './gestion-docteur/gestion-docteur.component';
import { GestionHopitauxComponent } from './gestion-hopitaux/gestion-hopitaux.component';
import { GestionPatientComponent } from './gestion-patient/gestion-patient.component';
import { GestionComptesUserComponent } from './gestion-comptes-user/gestion-comptes-user.component';


// import { DetailVendeurComponent } from './detail-vendeur/detail-vendeur.component';

const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent,
   
    children: [
      { path: 'Accueil_Admin', component: AccueilAdminComponent },
      { path: 'gestion-commentaire', component:GestionCommentaireComponent },

    
      // {
      //   path: 'detailProprietaire/:id',
      //   component: DetailProprietaireComponent,
      // },
      // { path: 'detailVendeur/:id', component: DetailVendeurComponent},
      // {
      //   path: 'annonces',
      //   children: [
      //     { path: '', component: AnnoncesComponent },
      //     {
      //       path: 'voitures',
      //       children: [
      //         { path: '', component: VoituresComponent },
      //         { path: 'dtsVoiture', component: DtsVoitureComponent },
      //       ],
      //     },
      //     {
      //       path: 'motos',
      //       children: [
      //         { path: '', component: MotosComponent },
      //         { path: 'dtsmoto', component: DtsMotoComponent },
      //       ],
      //     },
      //     {
      //       path: 'utilitaires',
      //       children: [
      //         { path: '', component: UtilitairesComponent },
      //         { path: 'dtsUtilitaire', component: DtsUtilitaireComponent },
      //       ],
      //     },
      //   ],
      // },
      { path: 'gestion-docteur', component: GestionDocteurComponent },
      { path: 'gestion-hopitaux', component: GestionHopitauxComponent },
      { path: 'gestion-patient', component: GestionPatientComponent },
      { path: 'gestion-comptes-user', component: GestionComptesUserComponent },
  
      { path: '', redirectTo: 'Accueil_Admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
