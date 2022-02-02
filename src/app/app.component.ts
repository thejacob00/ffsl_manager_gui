import { Component } from '@angular/core';
import { GetTeamService } from './get-team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: any = [];
  constructor(private getTeamService: GetTeamService) {
  }
  
  ngOnInit(): void {
    this.readTeamInfo();
  }
  readTeamInfo(): void {
    this.getTeamService.getTeamInfoFromCreds('jphelps', 'password').subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
  

  title = 'ffsl-manager-gui';
  
}
