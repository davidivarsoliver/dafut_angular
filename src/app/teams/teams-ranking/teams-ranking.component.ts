import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-ranking',
  templateUrl: './teams-ranking.component.html',
  styleUrls: ['./teams-ranking.component.css']
})
export class TeamsRankingComponent implements OnInit {

  teams: Team[] = [];



 

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(
      teams => {
        this.teams = teams             
        //sumar el array de puntos del json teams
      
      }
    )
   
  }

}
