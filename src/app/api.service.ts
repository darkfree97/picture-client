import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = 'https://picture-server.herokuapp.com/api/';
  authorization_token = 'c0ccf388f26bbeb3de0fee78642a1007fd46d57c';

  constructor(private http: HttpClient) { }

  loadImages() {
    return this.http.get(this.prepareUrl('images/'), this.prepareOptions());
  }

  private prepareOptions() {
    let headers = new HttpHeaders({'Content-Type':  'application/json'});
    if (this.authorization_token.length > 0) {
      headers = headers.append('Authorization', 'Token ' + this.authorization_token);
    }
    const httpOptions = { headers: headers};
    console.log(httpOptions.headers.keys());
    return httpOptions;
  }

  private prepareUrl(url: string) {
    return this.base_url + url;
  }
}
