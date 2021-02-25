import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team';
import {map,filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  teamsURL = '/assets/json/teams.json';

  getTeams(): Observable<Team[]>{   // retorna un observable al que cal subscriure's
    return this.http.get<{teams: Team[]}>(this.teamsURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => {
        console.log(response.teams)
        return response.teams
      })
         // de la resposta traguem l'array que ens interessa
      );
  }
  getTeam(id:string): Observable<Team>{   // retorna un observable al que cal subscriure's
  return this.http.get<{teams: Team[]}>(this.teamsURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
    map(response => response.teams.filter(t => t.id === id)[0]) // de la resposta traguem l'array que ens interessa
    );
  }

  editTeam(team: Team): Observable<Team>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(team);
    return this.http.put<Team>('/assets/json/teams.json/'+team.id,body,{'headers':headers});
  
  }
}
