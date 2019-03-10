import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Track} from "../../models/track";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @Input() public tracks: Track[] = [];
  @Output() public scrolled: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
