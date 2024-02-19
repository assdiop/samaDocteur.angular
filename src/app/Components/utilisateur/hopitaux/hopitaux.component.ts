import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../../../services/hopital.service';



@Component({
  selector: 'app-hopitaux',
  templateUrl: './hopitaux.component.html',
  styleUrls: ['./hopitaux.component.scss']
})
export class HopitauxComponent implements OnInit{


  
   hopitaux: any[] = [];
  localite: any[] = [];
  localiteSelectionnee: string = '';
  localite_idHopitaux!: string;

  constructor(private hopitalService:HopitalService){}

  ngOnInit(): void {
    this.getAllHospitals();
  }

  Hopitaux: any[] = [];
  


  // filterHopitauxByLocalite(localiteId: number) {
  //   this.hopitalService.getHopitauxByLocaliteId(localiteId).subscribe(
  //     (Hopitaux) => {
  //       console.log(Hopitaux);
  //       this.Hopitaux = Hopitaux.hopitaux;
  //     },
  //     (error) => {
  //       console.error("Une erreur s'est produite lors du filtrage des hôpitaux par localité: ", error);
  //     }
  //   );
  // }
   getAllHospitals() {
   this.hopitalService.getAllHospital().subscribe(
      (Hopitaux) => {
        // Afficher la liste des regions
        console.log("les hopitaux:",Hopitaux);
        this.Hopitaux = Hopitaux.hopitaux;

        console.log(this.Hopitaux);
     },
     
     

      (error) => {
        // Traiter l'erreur de liste

      }
    );
  }


  filtrerParLocalite(localite: string): void {
    this.localiteSelectionnee = localite;
  }

}
