import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Client } from 'src/app/interfaces/client';
import { Compte } from 'src/app/interfaces/compte';
import { Operation } from 'src/app/interfaces/operation';
import { NotifierService } from 'src/app/notifier.service';


@Component({
  selector: 'app-cdetails',
  templateUrl: './cdetails.component.html',
  styleUrls: ['./cdetails.component.scss']
})
export class CdetailsComponent implements OnInit {
  closeResult = '';

  public clientId : string = "o";
  public comptes : Compte[] = [];
  public client! : Client;
  public operations : Operation [] = [];
  public rib : String = "1";
  constructor( private route:ActivatedRoute,private agentService : AgentServiceService,private notifierService : NotifierService) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get("id")!;
    this.getClientComptes();
    localStorage.setItem("currentClient",this.clientId);
    this.getClient();


}
public getClientComptes() {
  let client = {} as Client;
  client.id_client = this.clientId;

  let a = this.agentService.afficher(client).subscribe(
    (response:Compte[]) => {
    if(response){
      this.comptes = response;
      this.rib = this.comptes[0].rib;
      this.getOperations();
    }
    else{
      console.log("empty");
    }

  
});
}

deleteCompte(id: string){

  this.agentService.deleteCompte(id).subscribe( response => {console.log(response);
    this.notifierService.showNotification("Compte supprimée avec succés" ,"",'success');
 this.getClientComptes();
})
}

public getClient(){
  this.agentService.getClientByPost(this.clientId).subscribe( response => {
    console.log(response);
    this.client = response;})
  }

  public getOperations(){
    console.log("comptes",this.rib)
    this.agentService.getOperationsByPost(this.rib).subscribe( response => {
      this.operations = response;})
      console.log("this",this.operations);
    }

}