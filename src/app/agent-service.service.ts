import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './interfaces/client';
import { Agent } from './interfaces/agent';
import { Compte } from './interfaces/compte';
import { Operation } from './interfaces/operation';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {
  private host = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getAgentClients(id : string) : Observable<Client[]>{
    return this.http.get<Client[]>(this.host + "/getAgentClients?id="+id);
  }

  public postAgent(agent : any) : Observable<Agent>{
    console.log("post method entred");
    console.log(agent);
    return this.http.post<any>(this.host + "/loginAgent",agent);
  }

  public verser(compte : any) : Observable<any>{

    return this.http.post<any>(this.host + "/verserSolde",compte);
  }

  public afficher(client : any) : Observable<any>{

    return this.http.post<any>(this.host + "/getClientComptes", client);}

  public addClient(client : Client){
    return this.http.post<Client>(this.host + "/SaveClient",client);
  }

  public findAgent(agent : Agent) : Observable<Agent>{

    return this.http.post<Agent>(this.host +"/findAgent",agent);}

  public addCompte(compte : Compte){
    return this.http.post<Client>(this.host + "/SaveCompte",compte);
  }
  public deleteCompte(id : String) : Observable<Object> {
    return this.http.delete<Compte>(this.host + "/deleteCompte/" + id);

  }
  
  public getClientByPost(id : string){
    return this.http.post<Client>(this.host + "/getClientByPost",id);
  }
  public getOperationsByPost(id : String){
    return this.http.post<Operation[]>(this.host + "/getOperationsByRib",id);
  }
}
