import {Injectable} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private limit: number = 15;

  constructor(private http: HttpClient) {
  }

  public getPlaylistsByUserId(userId: number, index: number): Observable<Object> {
    /* No CORS on Deezer's API so either :
        1 - Server side render the app and add the CORS headers
        2 - Use a ready to use proxy (https://cors-anywhere.herokuapp.com)

        For a personal project or a test like this one, using the heroku hosted app is a cheaper and faster way.
        For a company, it would be preferable to not be dependent of a third party and use your own server.
    */
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/${userId}/playlists?limit=${this.limit}&index=${index * this.limit}`);
  }
}
