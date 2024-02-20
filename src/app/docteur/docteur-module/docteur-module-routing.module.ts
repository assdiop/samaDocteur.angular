import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDocteurComponent } from '../main-docteur/main-docteur.component';
import { AcceuilDocteurComponent } from '../acceuil-docteur/acceuil-docteur.component';
import { GestionRegionComponent } from 'src/app/admin/gestion-region/gestion-region.component';
import { GestionCompteComponent } from '../gestion-compte/gestion-compte.component';
import { GestionRendezVousComponent } from '../gestion-rendez-vous/gestion-rendez-vous.component';

const routes: Routes = [
  {
    path: '', component: MainDocteurComponent, children: [
      { path: 'acceuil-docteur', component: AcceuilDocteurComponent },
      { path: 'gestion-rendez-vous', component: GestionRendezVousComponent },
      { path: 'gestion-compte', component: GestionCompteComponent},
      { path: '', redirectTo: 'acceuil-docteur', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocteurModuleRoutingModule { }
