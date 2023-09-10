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
  next_year = "2023";
  user: any = [];
  teams: any = undefined;
 
  constructor(
    private getTeamService: GetTeamService,
    private rosterService: RosterService,
  ) {
  }
  
  async ngOnInit(): Promise<void> {
    //this.readTeamInfo();
    this.teams = await this.rosterService.getAllTeams();
  }

  readTeamInfo(): void {
    this.getTeamService.getTeamInfoFromCreds('jphelps', 'password').subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  title = 'ffsl-manager-gui';
}
