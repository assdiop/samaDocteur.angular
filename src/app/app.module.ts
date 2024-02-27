import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './Components/utilisateur/acceuil/acceuil.component';
import { AproposComponent } from './Components/utilisateur/apropos/apropos.component';
import { DocteurComponent } from './Components/utilisateur/docteur/docteur.component';
import { HopitauxComponent } from './Components/utilisateur/hopitaux/hopitaux.component';
import { ContactComponent } from './Components/utilisateur/contact/contact.component';
import { HeaderComponent } from './layouts//header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AuthComponent } from './Components/utilisateur/auth/auth.component';
import { InscriptionComponent } from './utilisateur/inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField } from '@angular/material/form-field';
import { DataTablesModule } from 'angular-datatables';
import { PolitiqueConfidentialitesComponent } from './Components/utilisateur/politique-confidentialites/politique-confidentialites.component';
import { ConditionsUtlisationsComponent } from './Components/utilisateur/conditions-utlisations/conditions-utlisations.component';
import { MentionsLegalesComponent } from './Components/utilisateur/mentions-legales/mentions-legales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './Components/admin/page404/page404.component';
import { FilterByLocalitePipe } from './filter-by-localite.pipe';
import { RendezVousComponent } from './Components/utilisateur/rendez-vous/rendez-vous.component';
import { MainDocteurComponent } from './docteur/main-docteur/main-docteur.component';
import { GestionRendezVousComponent } from './docteur/gestion-rendez-vous/gestion-rendez-vous.component';
import { GestionCompteComponent } from './docteur/gestion-compte/gestion-compte.component';
import { AcceuilDocteurComponent } from './docteur/acceuil-docteur/acceuil-docteur.component';
import { SidebarDocteurComponent } from './docteur/sidebar-docteur/sidebar-docteur.component';
import { HeaderDocteurComponent } from './docteur/header-docteur/header-docteur.component';
import { NavbarDocteurComponent } from './docteur/navbar-docteur/navbar-docteur.component';
import { CapitalizeFirstPipe } from './capitalize-first.pipe';







@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AproposComponent,
    DocteurComponent,
    ContactComponent,
    HopitauxComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    InscriptionComponent,
    PolitiqueConfidentialitesComponent,
    ConditionsUtlisationsComponent,
    MentionsLegalesComponent,
    Page404Component,
    FilterByLocalitePipe,
    RendezVousComponent,
    MainDocteurComponent,
    GestionRendezVousComponent,
    GestionCompteComponent,
    AcceuilDocteurComponent,
    SidebarDocteurComponent,
    HeaderDocteurComponent,
    NavbarDocteurComponent,
    CapitalizeFirstPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
