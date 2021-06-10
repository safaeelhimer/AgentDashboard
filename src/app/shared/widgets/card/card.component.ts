import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

;

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: string = " ";
  @Input() nom: string = " ";
  @Input() prenom: string = " ";
  @Input() email: string = " ";
  @Input() cin: string = " ";
  @Input() tel: string = " "; 


  constructor() { }

  ngOnInit() {
    
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }



}
