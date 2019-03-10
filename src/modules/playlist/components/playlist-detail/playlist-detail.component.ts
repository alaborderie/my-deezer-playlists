import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from "../../models/playlist";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {

  @Input() public playList: Playlist;

  constructor() { }

  ngOnInit() {
  }

}
