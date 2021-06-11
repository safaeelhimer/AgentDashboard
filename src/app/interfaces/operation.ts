import { Compte } from "./compte";

export interface Operation {
    numero : number,
     dateOperation: Date,
     montant : number,
    compte : Compte

}
