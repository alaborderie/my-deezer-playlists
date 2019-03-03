import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Playlist} from "../../models/playlist";
import {PlaylistService} from "../../services/playlist.service";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {

  private playlistId: number;
  public playList: Playlist;

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistId = this.route.snapshot.params['playlistId'];
    this.playlistService.getPlayListById(this.playlistId)
      .subscribe((playlist: Playlist) => {
        console.log(playlist);
        this.playList = playlist;
      })
  }

}
