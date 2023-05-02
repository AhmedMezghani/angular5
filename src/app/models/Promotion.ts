import {Stock} from "./Stock";

export class Promotion {
  id: number;
  pourcentage: number;
  PromotionDate: Date;
  duree:number;
  nom: string;
  description: string;
  stocks : Stock[] ;


}

