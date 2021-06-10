import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Agent } from 'src/app/interfaces/agent';
import { Client } from 'src/app/interfaces/client';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private agentService : AgentServiceService,private notifierService : NotifierService,private router : Router) { }

  ngOnInit(): void {

  }

  public onAjouterClient(ajouterClient : NgForm){
    let client: Client;
    client = ajouterClient.value;
    client.date = new Date();
    let  currentAgent =  {} as Agent;
    currentAgent.id_Agent = localStorage.getItem("currentAgent")!;
    client.agent = currentAgent;
    client.mdp = client.cin;
    console.log(client);
    let a = this.agentService.addClient(client).subscribe(
      (response:any) => {
      if(response){
        console.log(response);
        this.notifierService.showNotification("un Client a été ajouté avec Succés" ,"",'success');
        this.router.navigate(['']);

      }else{
        this.notifierService.showNotification("error dans l'ajout par serveur , ressaye !","",'danger');

      }
      console.log(response)},
      (err : HttpErrorResponse) => {
        console.log (err)});


  }

}
