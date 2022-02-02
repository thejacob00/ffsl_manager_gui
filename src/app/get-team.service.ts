import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTeamService {

  constructor(private httpClient: HttpClient) { }

  getTeamInfo(id: any)
  {
    return this.httpClient.get('http://localhost:8000/user/' + encodeURIComponent(id));
  }

  getTeamInfoFromCreds(username: any, password: any)
  {
    const data = {username: username, password: password};
    return this.httpClient.post<any>('http://localhost:8000/login/', data);
  }
}
