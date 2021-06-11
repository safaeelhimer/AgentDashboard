import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Client } from 'src/app/interfaces/client';
import { Compte } from 'src/app/interfaces/compte';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.scss']
})
export class AddcompteComponent implements OnInit {

  constructor(private agentService : AgentServiceService,private notifierService : NotifierService,private router : Router) { }

  ngOnInit(): void {
  }
  public onAjouterCompte(ajouterCompte : NgForm){
    let compte: Compte;
    compte = ajouterCompte.value;
    console.log(localStorage.getItem("currentClient")!);
    let  currentClient =  {} as Client;
    currentClient.id_client = localStorage.getItem("currentClient")!;
    compte.client = currentClient;
    console.log(compte);

    let a = this.agentService.addCompte(compte).subscribe(
      (response:any) => {

      if(response){
        console.log(response);
        this.notifierService.showNotification("un Client a été ajouté avec Succés" ,"",'success');
        this.router.navigate(['/clientDetails/'+ currentClient.id_client]);

      }else{
        this.notifierService.showNotification("error dans l'ajout par serveur , ressaye !","",'danger');

      }
      console.log(response)},
      (err : HttpErrorResponse) => {
        console.log (err)});


  }

}
