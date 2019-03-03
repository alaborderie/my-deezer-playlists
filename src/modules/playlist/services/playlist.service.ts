import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private limit: number = 30;

  constructor(private http: HttpClient) {
  }

  public getPlayListById(id: number): Observable<Object> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${id}`);
  }

  public getTracksByPlayListId(playListId: number, index: number): Observable<Object> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${playListId}/tracks?limit=${this.limit}&index=${index * this.limit}`);
  }
}
