import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.scss']
})
export class AgentdashboardComponent implements OnInit {

  private agentId : String |any = "";
  public clients: Client[] =  [];


  constructor(private agentService : AgentServiceService,private router : Router) { }

  ngOnInit(): void {
    let myLocalstorage = localStorage.getItem("currentAgent");
    if(!myLocalstorage){
        this.router.navigate(['/login']);
    }
    else{
      this.agentId = localStorage.getItem("currentAgent");
      this.getAgentClients();
    }
  }
  private  getAgentClients(){
    this.agentService.getAgentClients(this.agentId).subscribe(
      (response:Client[]) => {
      this.clients = response},(err : HttpErrorResponse) => {console.log (err)});
      
  }


}
