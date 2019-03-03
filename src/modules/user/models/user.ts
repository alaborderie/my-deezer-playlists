import {Playlist} from "../../playlist/models/playlist";

export class User {

  public id: number;
  public playLists: Playlist[] = [];

  constructor(id?: number, playLists?: Playlist[]) {
    if (id)
      this.id = id;
    if (playLists)
      this.playLists = playLists;
  }
}
