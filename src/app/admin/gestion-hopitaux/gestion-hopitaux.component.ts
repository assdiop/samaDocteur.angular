import { Component } from '@angular/core';
import { Hopitaux } from 'src/app/models/hopitaux';
import { HopitalService } from 'src/app/services/hopital.service';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-gestion-hopitaux',
  templateUrl: './gestion-hopitaux.component.html',
  styleUrls: ['./gestion-hopitaux.component.scss']
})
export class GestionHopitauxComponent {

  
  
  image!: File;
  nom_hopitaux = "";
  lattitudeHopitaux = "";
  longitudeHopitaux = "";
  horaireHopitaux = "";
  imageHopitaux = "";
  localite_idHopitaux = "";
  descriptionHopitaux = "";


  constructor(private hopitalService: HopitalService , private messageService: MessageService) {}

 addHopitaux() {
    console.log(this.nom_hopitaux);
    console.log(this.descriptionHopitaux);
    console.log(this.lattitudeHopitaux);
    console.log(this.longitudeHopitaux);
    console.log(this.horaireHopitaux);
    console.log(this.image);
    console.log(this.localite_idHopitaux);
  
    const newHopitaux = new Hopitaux;
    

    // newHopitaux.nom_hopitaux = this.nom_hopitaux;
    // newHopitaux.longitude = this.longitudeHopitaux;
    // newHopitaux.lattitude = this.lattitudeHopitaux;
    // newHopitaux.horaire = this.horaireHopitaux;
    // newHopitaux.localite_id = this.localite_idHopitaux;
    // newHopitaux.description = this.descriptionHopitaux;
      
   

    if (this.nom_hopitaux == "" || this.longitudeHopitaux == "" || this.lattitudeHopitaux == "" || this.horaireHopitaux == ""
      || this.localite_idHopitaux == "" || this.descriptionHopitaux == "") {
      // this.message.showMessage("error", "Veuillez remplir tout les champs");
      console.log("fdffdfd", newHopitaux);

    } else {

      let newHopitaux = new FormData();
      newHopitaux.append("image", this.image);
      newHopitaux.append("nom_hopital", this.nom_hopitaux);
      newHopitaux.append("longitude", this.longitudeHopitaux);
      newHopitaux.append("lattitude", this.lattitudeHopitaux);
      newHopitaux.append("localite_id", this.localite_idHopitaux);
      newHopitaux.append("description", this.descriptionHopitaux);
      newHopitaux.append("horaire", this.horaireHopitaux);

      
    

      this.hopitalService.addHopitaux(newHopitaux).subscribe(
        (response) => {
          console.log('Docteur ajouté avec succès.', response);
          this.alertMessage('success', 'Cool', 'Docteur ajouté avec succès');
        },
        (error) => {
          this.alertMessage('error', 'Oops', "Erreur lors de l'ajout du docteur");
          console.error("Une erreur s'est produite lors de l'ajout du docteur: ", error);
        }
      );

    
      //   this.docteurService.registerDocteur(newDocteur).subscribe(
      //     (repose) => {console.log("voir inscription", repose);
      //   })
      //   this.docteurService.Docteur(newDocteur).subscribe((response: any) => {
      //     console.log("voir inscription", response:any);
      //   })
    
      //      this.alertMessage(
      //               'success',
      //               'Super',
      //               'Inscription réussie avec succés.'
      //             );
      // }

      

    
  
  

      // dtOptions: DataTables.Settings = {};

      // ngOnInit(): void {
      //   this.dtOptions = {
      //     searching: true,
      //     lengthChange: false,
      //     paging: true,
      //     info: false,
      //     language: {
      //       url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      //     }
      //   };

    

  
      // }
      // getFile(event: any) {
      //     const file = event.target.files[0];
      //     console.log(file);
      //   }




    }
  
 }
  
  
          alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
          }
  
   getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
}