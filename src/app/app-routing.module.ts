import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamsDetailComponent } from './teams/teams-detail/teams-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './user/auth.guard';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { TeamsResolveService } from './teams/teams-resolve.service';
import { TeamsEditComponent } from './teams/teams-edit/teams-edit.component';
import { TeamsRankingComponent } from './teams/teams-ranking/teams-ranking.component';

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'teams',
  canActivate: [AuthGuard],
  component: TeamsListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'players', canActivate: [AuthGuard], component: PlayersListComponent},
  {path: 'team/:id', component: TeamsDetailComponent},

  {path: 'team/edit/:id',
  canActivate: [AuthGuard],
  resolve: {team: TeamsResolveService},
  component: TeamsEditComponent},

  {path: 'ranking', canActivate: [AuthGuard], component: TeamsRankingComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
