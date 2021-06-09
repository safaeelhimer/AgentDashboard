import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/interfaces/agent';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public nomAgent : string | null ="";
  public emailAgent : string | null ="";
  constructor() { }

  ngOnInit(){
    this.nomAgent = localStorage.getItem("nomAgent");
    this.emailAgent = localStorage.getItem("emailAgent");


  }


}
