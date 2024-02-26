import { Specialite } from "./specialite";

export class Hopitaux {
    id!: number
    nom_hopitaux!: string;
    description!: string;
    lattitude!:string
    longitude!:string;
    horaire!:string;
    image!:File;
    localite_id!: number;
    adresse!: string;
    etat!: number;
    type!: string;
    heure_ouverture_semaine!: string;
    heure_fermeture_semaine!: string;
    heure_ouverture_weekend!: string;
    heure_fermeture_weekend!: string;
    services!: Specialite[];
}

// export class Service {
//     id!: number;
//     etat!: string;
//     specialistes!: Specialiste[];
// }

// export class Specialiste {
//     id!: number;
//     etat!: string;
// }