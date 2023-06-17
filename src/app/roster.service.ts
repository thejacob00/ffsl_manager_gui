import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  constructor(private httpClient: HttpClient) {
  }

  getAllTeams() {
    return this.httpClient.get('http://localhost:8000/roster/').toPromise();
  }

  getTeam(id: any) {
    return this.httpClient.get('http://localhost:8000/roster/' + encodeURIComponent(id)).toPromise();
  }
}
