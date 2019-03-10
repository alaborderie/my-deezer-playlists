import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Playlist} from "../../models/playlist";
import {PlaylistService} from "../../services/playlist.service";
import {Track} from "../../../track/models/track";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {

  private playlistId: number;
  public playList: Playlist;

  public isLoading: boolean = false;
  public isComplete: boolean = false;
  private index: number = 0;

  public tracks: Track[] = [];

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistId = this.route.snapshot.params['playlistId'];
    this.playlistService.getPlayListById(this.playlistId)
      .subscribe((playlist: any) => {
        console.log(playlist);
        this.playList = playlist;
        this.playList.tracks = playlist.tracks.data;
        this.playList.duration;
        this.getNextTracks();
      });
  }

  public onScroll(): void {
    console.log('scrolled!');
    if (!this.isLoading && !this.isComplete) {
      this.getNextTracks();
    }
  }

  private getNextTracks(): void {
    this.isLoading = true;
    this.playlistService.getTracksByPlayListId(this.playlistId, this.index)
      .subscribe((tracks: { data: Track[], next?: string, total: number, checksum: string }) => {
        this.isLoading = false;
        this.tracks = this.tracks.concat(tracks.data);
        if (tracks.next) {
          this.index++;
        } else {
          this.isComplete = true;
        }
        console.log('Tracks: ', tracks);
      }, (error) => {
        this.isLoading = false;
        console.log('Error: ', error);
      });
  }

}
