import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './team';

@Pipe({
  name: 'filterTeams'
})
export class FilterTeamsPipe implements PipeTransform {

  transform(teams: Team[], value: string): Team[] {
    value = value ? value.toLocaleLowerCase() : "";
    teams = value ? teams.filter(t => t.nombre.toLocaleLowerCase().includes(value)): teams;
    return teams;
  }

}
