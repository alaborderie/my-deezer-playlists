import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from "../../models/playlist";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input() public playLists: Playlist[];
  @Output() public scrolled: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
