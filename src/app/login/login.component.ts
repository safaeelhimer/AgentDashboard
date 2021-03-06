import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from '../agent-service.service';
import { Agent } from '../interfaces/agent';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnAgent! : Agent;

  constructor(private agentService : AgentServiceService,private router : Router,private notifierService : NotifierService) { 

  }

  ngOnInit(): void {
    let myLocalstorage = localStorage.getItem("currentAgent");
    if(myLocalstorage){
        this.router.navigate(['']);
        setTimeout(()=>{
          localStorage.clear();
    },1000*60*20)
    }
  }
  onLogin(loginxform: NgForm){
    let a = this.agentService.postAgent(loginxform.value).subscribe(
      (response:Agent) => {
      if(response){
        console.log("user founded");
        this.returnAgent = response;
        localStorage.setItem("currentAgent",this.returnAgent.id_Agent);
        localStorage.setItem("emailAgent",this.returnAgent.email);
        localStorage.setItem("nomAgent",this.returnAgent.nom + " " + this.returnAgent.prenom);
        this.router.navigate(['']);
        console.log("not found");
        this.notifierService.showNotification("Welcome back " + this.returnAgent.nom + " " + this.returnAgent.prenom ,"",'success');
        
      }else{
        this.notifierService.showNotification("incorrect Email or Password","",'danger');

      }
      console.log(response)},
      (err : HttpErrorResponse) => {
        console.log (err)});
  }

}
