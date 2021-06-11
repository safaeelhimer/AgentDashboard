import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/agent-service.service';
import { Agent } from 'src/app/interfaces/agent';

@Component({
  selector: 'app-espcaeagent',
  templateUrl: './espcaeagent.component.html',
  styleUrls: ['./espcaeagent.component.scss']
})
export class EspcaeagentComponent implements OnInit {
  public agent! : Agent;

  constructor(private agentService : AgentServiceService) { }

  ngOnInit(): void {
    this.findAgent();
  }

  public findAgent(){
    let agent = {} as Agent;
    agent.id_Agent = localStorage.getItem("currentAgent")!;
    this.agentService.findAgent(agent).subscribe(
      (response:Agent) => {
      if(response){
        this.agent = response;
        console.log(this.agent);
      }
      else{
        console.log(response);
      }
    })
  }
}
