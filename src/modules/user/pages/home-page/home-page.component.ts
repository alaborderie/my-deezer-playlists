import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public playLists: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPlaylistsByUserId(5)
      .subscribe((playlists: Object) => {
        console.log('Playlists: ', playlists);
    }, (error) => {
        console.log('Error: ', error);
      })
  }

}
