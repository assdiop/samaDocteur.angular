import { Pipe, PipeTransform } from '@angular/core';
import { Hopitaux } from './models/hopitaux';

@Pipe({
  name: 'filterByLocalite'
})
export class FilterByLocalitePipe implements PipeTransform {

transform(hopitaux: Hopitaux[], localiteId: number): Hopitaux[] {
    if (!hopitaux || !localiteId) {
      return hopitaux;
    }

    // Filtrer les hôpitaux en fonction de l'ID de la localité
    return hopitaux.filter(hopital => hopital.localite_id === localiteId);
  }

}
