import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgentServiceService } from 'src/app/agent-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  constructor(private agentService : AgentServiceService) { }

  ngOnInit(): void {
  }
  onVerse(loginxform: NgForm){
    let a = this.agentService.verser(loginxform.value).subscribe(
      (response:any) => {
      if(response){
        console.log(response);

      }else{
        console.log("not found");

      }
      console.log(response)},
      (err : HttpErrorResponse) => {
        console.log (err)});
  }

}
