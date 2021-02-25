import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  
  players: Player[] = [];



  constructor(private playersService: PlayerService) { }

  ngOnInit(): void {
    
    this.playersService.getPlayers().subscribe(
      players => this.players = players
    )
  }

}
