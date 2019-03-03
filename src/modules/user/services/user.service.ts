import {Injectable} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getPlaylistsByUserId(userId: number): Observable<Object> {
    /* TODO: No CORS on Deezer's API so either :
        1 - Server side render the app and add the CORS header
        2 - Use a proxy (https://cors-anywhere.herokuapp.com)
    */
    return this.http.get(`https://api.deezer.com/user/${userId}/playlists`);
  }
}
