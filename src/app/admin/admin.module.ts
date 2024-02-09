import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { GestionDocteurComponent } from './gestion-docteur/gestion-docteur.component';
import { LogoutAdminComponent } from '../Components/admin/logout-admin/logout-admin.component';
import { AdminComponent } from './admin.component';
import { TableComponent } from './table/table.component';
import { GestionPatientsComponent } from './gestion-patients/gestion-patients.component';
import { GestionHopitauxComponent } from './gestion-hopitaux/gestion-hopitaux.component';
import { GestionComptesComponent } from './gestion-comptes/gestion-comptes.component';
import { GestionCommentairesComponent } from './gestion-commentaires/gestion-commentaires.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { GestionRegionComponent } from './gestion-region/gestion-region.component';
import { LocaliteComponent } from './localite/localite.component';
import { GestionSpecialiteComponent } from './gestion-specialite/gestion-specialite.component';



@NgModule({
  declarations: [
    NavbarAdminComponent,
    SidebarAdminComponent,
    AccueilAdminComponent,
    AdminMainComponent,
    GestionDocteurComponent,
    LogoutAdminComponent,
    AdminComponent,
    TableComponent,
    GestionPatientsComponent,
    GestionHopitauxComponent,
    GestionComptesComponent,
    GestionCommentairesComponent,
    GestionRegionComponent,
    LocaliteComponent,
    GestionSpecialiteComponent 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class AdminModule { }
