import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamsItemComponent } from './teams/teams-item/teams-item.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsService } from './teams/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamsDetailComponent } from './teams/teams-detail/teams-detail.component';
import { FilterTeamsPipe } from './teams/filter-teams.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ForDelayDirective } from './directives/for-delay.directive';
import { FooterComponent } from './components/footer/footer.component';
import { PlayersItemComponent } from './players/players-item/players-item.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { TeamsEditComponent } from './teams/teams-edit/teams-edit.component';
import { MinMatchesDirective } from './directives/directives/min-matches.directive';
import { TeamsRankingComponent } from './teams/teams-ranking/teams-ranking.component';
import { TeamsNewComponent } from './teams/teams-new/teams-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsListComponent,
    TeamsItemComponent,
    HomeComponent,
    TeamsDetailComponent,
    FilterTeamsPipe,
    LoginComponent,
    ForDelayDirective,
    FooterComponent,
    PlayersItemComponent,
    PlayersListComponent,
    TeamsEditComponent,
    MinMatchesDirective,
    TeamsRankingComponent,
    TeamsNewComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
