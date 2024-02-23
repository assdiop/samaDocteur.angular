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
    etat!: string;
    type!: string;
    specialites!: Specialite[];
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