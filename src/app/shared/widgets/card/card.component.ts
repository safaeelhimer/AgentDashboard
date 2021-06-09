import { Component, OnInit, Input } from '@angular/core';
;

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
