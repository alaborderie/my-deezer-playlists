import {Track} from "../../track/models/track";

export class Playlist {

  public id: number;
  public tracks: Track[];
  public picture: string;
  public title: string;
  public creator: Creator;

  constructor(tracks: Track[] = [], title: string, creator: Creator, picture?: string) {
    this.tracks = tracks;
    this.title = title;
    this.creator = creator;
    if (picture)
      this.picture = picture;
  }
}

interface Creator {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}
