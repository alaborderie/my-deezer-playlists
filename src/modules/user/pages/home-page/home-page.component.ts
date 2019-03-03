import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Playlist} from "../../../playlist/models/playlist";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public playLists: any[] = [];
  public index: number = 0;
  public isLoading: boolean = false;
  public isComplete: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getNextPlaylists();
  }

  public onScroll(): void {
    console.log('scrolled!');
    if (!this.isLoading && !this.isComplete) {
      this.getNextPlaylists();
    }
  }

  public getNextPlaylists() {
    this.isLoading = true;
    this.userService.getPlaylistsByUserId(5, this.index)
      .subscribe((playLists: { data: Playlist[], next?: string, total: number, checksum: string }) => {
        this.isLoading = false;
        this.playLists = this.playLists.concat(playLists.data);
        if (playLists.next) {
          this.index++;
        } else {
          this.isComplete = true;
        }
        console.log('PlayLists: ', playLists);
      }, (error) => {
        this.isLoading = false;
        console.log('Error: ', error);
      })
  }

}
