import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importer RouterModule et Routes
// import { AcceuilComponent } from '../Components/utilisateur/acceuil/acceuil.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { GestionDocteurComponent } from './gestion-docteur/gestion-docteur.component';
// import { GestionPatientsComponent } from './gestion-patients/gestion-patients.component';
// import { GestionHopitauxComponent } from './gestion-hopitaux/gestion-hopitaux.component';z
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { GestionCommentairesComponent } from './gestion-commentaires/gestion-commentaires.component';
import { GestionPatientsComponent } from './gestion-patients/gestion-patients.component';
import { GestionRegionComponent } from './gestion-region/gestion-region.component';
import { LocaliteComponent } from './localite/localite.component';
import { GestionSpecialiteComponent } from './gestion-specialite/gestion-specialite.component';

const routes: Routes = [
  {
    path: '', component: AdminMainComponent, children: [
      { path: 'accueilAdmin', component: AccueilAdminComponent },
      { path: 'gestiondocteur', component: GestionDocteurComponent },
      { path: 'gestionpatients', component: GestionPatientsComponent  },
      // { path: 'gestionhopitaux', component: GestionHopitauxComponent },
      { path: 'gestioncomptes', component: GestionComptesComponent },
      { path: 'gestioncommentaire', component: GestionCommentairesComponent },
      { path: 'gestionregion', component: GestionRegionComponent },
      { path: 'localite', component: LocaliteComponent },
      { path: 'gestionspecialite', component:GestionSpecialiteComponent },

      
      

      { path: '', redirectTo: 'accueilAdmin', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Utiliser RouterModule.forChild()
  exports: [RouterModule] // Exporter RouterModule
})
export class AdminRoutingModule { }


























// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes } from '@angular/router';
// import { AcceuilComponent } from '../Components/utilisateur/acceuil/acceuil.component';
// // import { makeBindingParser } from '@angular/compiler';
// import { AdminMainComponent } from './admin-main/admin-main.component';


// const routes: Routes = [

//   {
//     path: '', component: AdminMainComponent, children: [

//       { path: 'accueilAdmin', component: AcceuilComponent}
    
//     ]
//   }
  
// ]


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
  
  
  
  
// export class AdminRoutingModule { }
