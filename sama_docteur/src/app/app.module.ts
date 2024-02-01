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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './Components/utilisateur/auth/auth.component';
import { InscriptionComponent } from './utilisateur/inscription/inscription.component';








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
    InscriptionComponent
    

  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
