import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teams-item',
  templateUrl: './teams-item.component.html',

})
export class TeamsItemComponent implements OnInit {

  @Input() team!: Team;

  ngStyle: { [klass: string]: any; } | undefined
  foto!: string;



  constructor() { }

  ngOnInit(): void {

    this.foto = "/assets/img/fondo5.jpg";


  }

}
