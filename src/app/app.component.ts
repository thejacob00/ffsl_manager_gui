import { Component } from '@angular/core';
import { GetTeamService } from './get-team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private getTeamService: GetTeamService) {}

  title = 'ffsl-manager-gui';
  user: any = this.getTeamService.getTeamInfo(1);
}
