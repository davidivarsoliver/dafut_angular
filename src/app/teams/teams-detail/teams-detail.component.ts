import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {

  team!: Team;


  constructor(private activatedRoute: ActivatedRoute,
    
    private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.team = this.activatedRoute.snapshot.data['team'];
    this.activatedRoute.params.subscribe(t => {
      this.teamsService.getTeam(t.id).subscribe(team => this.team = team);
    });
  }

}
