import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from "../../models/playlist";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input() public playLists: Playlist[];

  constructor() { }

  ngOnInit() {
  }

}
