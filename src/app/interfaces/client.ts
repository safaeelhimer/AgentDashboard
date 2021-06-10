import { Agent } from "./agent";


export interface Client {
     id : String
    nom : string
    prenom : string
    mdp : string
    tel : string
    cin : string
    date : Date
    email: string
    agent : Agent

}
