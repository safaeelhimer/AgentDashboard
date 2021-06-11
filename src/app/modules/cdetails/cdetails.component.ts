import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Client } from 'src/app/interfaces/client';
import { Compte } from 'src/app/interfaces/compte';


@Component({
  selector: 'app-cdetails',
  templateUrl: './cdetails.component.html',
  styleUrls: ['./cdetails.component.scss']
})
export class CdetailsComponent implements OnInit {
  closeResult = '';

  public clientId : string = "o";
  public comptes : Compte[] = [];
  constructor( private route:ActivatedRoute,private agentService : AgentServiceService,) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get("id")!;
    this.getClientComptes();
    localStorage.setItem("currentClient",this.clientId);


}
public getClientComptes() {
  let client = {} as Client;
  client.id_client = this.clientId;

  let a = this.agentService.afficher(client).subscribe(
    (response:Compte[]) => {
    if(response){
      this.comptes = response;
    }
    else{
      console.log("empty");
    }

  
});
}

deleteCompte(id: string){

  this.agentService.deleteCompte(id).subscribe( response => {console.log(response);
 this.getClientComptes();
})
}

}