import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html'
})
export class TeamsListComponent implements OnInit {

  teams: Team[] = [];

  value: string = '';

  constructor(private teamsService: TeamsService ) { }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(
      teams => this.teams = teams
    )
  }

}
