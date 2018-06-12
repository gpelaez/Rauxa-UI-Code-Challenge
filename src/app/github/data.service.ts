import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private defaultHeaders: HttpHeaders;
  readonly apiUrl: string = 'https://api.github.com/';

  constructor(private http: HttpClient) {
    this.defaultHeaders = new HttpHeaders({
      'Accepts': 'application/vnd.github.v3.text-match+json'
    });
  }

  
  private get(action: string, payload: any = {}, headers: HttpHeaders  = new HttpHeaders()) : Observable<any> {
    this.defaultHeaders.keys().forEach((key) => {
      let value = this.defaultHeaders.getAll(key);
      headers.append(key, value);
    });
    let params = new HttpParams();
    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        params.set(key, payload[key]);
      }
    }
    return this.http.get(
      this.apiUrl + action,
      {
        params: payload,
        headers: headers
      }
    );
  }

  searchUsers(query: string): Observable<any> {
    let action = 'search/users';
    let params = {
      q: query
    };
    return this.get(action, params);
  }
  userDetails(username: string): Observable<any> {
    let action = 'users/' + username;
    return this.get(action);
  }
  userFollowers(username: string, per_page: number = 0, page: number = 10): Observable<any> {
    let action = 'users/' + username + '/followers';
    return this.get(action, {
      per_page: per_page,
      page: page
    });
  }
}
