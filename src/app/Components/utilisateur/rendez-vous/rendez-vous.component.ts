import { Component,OnInit } from '@angular/core';
import { RendezVous } from 'src/app/models/rendezvous';
import { RendezVousService } from 'src/app/services/rendez-vous.service';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent {

   rendezVousList: RendezVous[] = [];
  newRendezVous: RendezVous = { id: 0, date: '', time: '', message: '' };

  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    // this.loadRendezVous();
  }

  // loadRendezVous(): void {
  //   this.rendezVousService.getAllRendezVous()
  //     .subscribe(rendezVousList => this.rendezVousList = rendezVousList);
  // }

  addRendezVous(): void {
    this.rendezVousService.addRendezVous(this.newRendezVous)
      .subscribe((respons) => {
        console.log("voirrrrr",respons);
        
        // this.loadRendezVous();
        this.newRendezVous = { id: 0, date: '', time: '', message: '' }; // Réinitialiser le formulaire
      });
  }

  updateRendezVous(rendezVous: RendezVous): void {
    this.rendezVousService.updateRendezVous(rendezVous)
      // .subscribe(() => this.loadRendezVous());
  }

  deleteRendezVous(id: number): void {
    this.rendezVousService.deleteRendezVous(id)
      // .subscribe(() => this.loadRendezVous());
  }

}

