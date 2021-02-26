import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from './team';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsResolveService implements Resolve<Team> {
  constructor( private teamsService: TeamsService, private router: Router ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Team | Observable<Team> | Promise<Team> | any
  {
    return this.teamsService.getTeam(route.params.id).pipe(
      catchError(error => {this.router.navigate(['/teams']);
      return of(null);
    })
    );
  }

}