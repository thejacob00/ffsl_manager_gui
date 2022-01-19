import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ffsl-manager-gui';
  user: any = {first_name:"ryan", last_name:"taylor", team_name:"steelers"}
}
