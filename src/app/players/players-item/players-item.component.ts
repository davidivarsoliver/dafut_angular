import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-players-item',
  templateUrl: './players-item.component.html',
  styleUrls: ['./players-item.component.css']
})
export class PlayersItemComponent implements OnInit {

  @Input() player!: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
