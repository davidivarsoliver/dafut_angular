import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
})
export class TeamsEditComponent implements OnInit {

  team!: Team;

  //constructor con ruta y variable teamsService
  constructor(private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.team = this.activatedRoute.snapshot.data['team'];
  }

  //funcion editar que llama al servicio, se suscribe
  editar(teamForm: NgForm){
    this.teamsService.editTeam(teamForm.value).subscribe(
      t => this.team = t
    );
    return false;
  }

}
