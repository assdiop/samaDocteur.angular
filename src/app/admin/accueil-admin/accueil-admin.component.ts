import { Component , OnInit} from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { DocteurService } from 'src/app/services/docteur.service';
import { HopitalService } from 'src/app/services/hopital.service';


@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil-admin.component.html',
  styleUrls: ['./accueil-admin.component.scss']
})
export class AccueilAdminComponent  implements OnInit{

  totalHopitaux: number = 0;
  data: any[] = [];
  Total_docteur: number = 0;
  Total_Client :number = 0;
  
    constructor(private hopitalService: HopitalService , private docteurService:DocteurService , private clientService:ClientsService) { }

  ngOnInit(): void {

    // service pour total hopital 
    this.hopitalService.getTotalHopitaux().subscribe(
      (total: any) => {
        this.totalHopitaux = total.data.totalhopitaux;
        console.log(this.totalHopitaux);
      },
      (error) => {
        console.error("Erreur lors de la récupération du nombre total d'hôpitaux: ", error);
      }
    );


    // Service pour totalt clients 

       this.clientService.getTotalPatients().subscribe(
      (total: any) => {
        this.Total_Client = total.data.Total_Client ;
        console.log(this.Total_Client );
      },
      (error) => {
        console.error("Erreur lors de la récupération du nombre total d'hôpitaux: ", error);
      }
    );


    // service  pour total docteur 


     this.docteurService. getTotalDocteur().subscribe(
      (total: any) => {
        this.Total_docteur= total.data.Total_docteur;
        console.log(this.Total_docteur);
      },
      (error) => {
        console.error("Erreur lors de la récupération du nombre total d'hôpitaux: ", error);
      }
    );
  }
  

}
