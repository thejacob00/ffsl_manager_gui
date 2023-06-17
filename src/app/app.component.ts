import { Component } from '@angular/core';
import { GetTeamService } from './get-team.service';
import { RosterService } from './roster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  current_year = "2022";
  user: any = [];
  rosters: any = undefined;
  teams: any = undefined;
 
  constructor(
    private getTeamService: GetTeamService,
    private rosterService: RosterService,
  ) {
  }
  
  async ngOnInit(): Promise<void> {
    this.readTeamInfo();
    this.rosters = await this.rosterService.getAllTeams();
    this.teams = Object.keys(this.rosters);
  }

  readTeamInfo(): void {
    this.getTeamService.getTeamInfoFromCreds('jphelps', 'password').subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  title = 'ffsl-manager-gui';
}
