import { Component } from '@angular/core';
import { HopitalService } from 'src/app/services/hopital.service';

@Component({
  selector: 'app-hopitaux',
  templateUrl: './hopitaux.component.html',
  styleUrls: ['./hopitaux.component.scss']
})
export class HopitauxComponent {

   hopitaux: any[] = [];
  localite: any[] = [];
  localiteSelectionnee: string = '';
  constructor(private hopitalService: HopitalService) { }
  ngOnInit(): void {
    this.getAllHospitals();

     this.hopitalService.getHopitauxParLocalite().subscribe(data => {
      this.hopitaux = data;
      this.localite= [...new Set(data.map((h: { localite: any; }) => h.localite))];
    });
  }

  Hopitaux: any[] = [];
  


   getAllHospitals() {
   this.hopitalService.getAllHospital().subscribe(
      (Hopitaux) => {
        // Afficher la liste des regions
        console.log(Hopitaux);
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
