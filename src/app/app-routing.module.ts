import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; import { AuthComponent } from './Components/utilisateur/auth/auth.component';
import { AcceuilComponent } from './Components/utilisateur/acceuil/acceuil.component';
import { AproposComponent } from './Components/utilisateur/apropos/apropos.component';
import { DocteurComponent } from './Components/utilisateur/docteur/docteur.component';
import { HopitauxComponent } from './Components/utilisateur/hopitaux/hopitaux.component';
import { ContactComponent } from './Components/utilisateur/contact/contact.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { InscriptionComponent } from './utilisateur/inscription/inscription.component';
import { MentionsLegalesComponent } from './Components/utilisateur/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialitesComponent } from './Components/utilisateur/politique-confidentialites/politique-confidentialites.component';
import { ConditionsUtlisationsComponent } from './Components/utilisateur/conditions-utlisations/conditions-utlisations.component';
import { securityGuard } from './guards/security.guard';






const routes: Routes = [
  // les routes pour un  utilisateur simple 

  // canActivate: [AuthGuard]

  { path: 'auth', component: AuthComponent },
  
  { path: 'inscription', component: InscriptionComponent },
   

  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'Docteur', component: DocteurComponent },
  { path: 'hopitaux', component: HopitauxComponent  , canActivate:[securityGuard]},
  { path: 'Contact', component: ContactComponent },
  { path: 'Mention', component: MentionsLegalesComponent },
  { path: 'Politique', component: PolitiqueConfidentialitesComponent },
  { path: 'Conditions', component: ConditionsUtlisationsComponent },




  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },

  //admin


    {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
     },
  
  // { 
  //   path: 'dashboard-admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },

];

 

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
