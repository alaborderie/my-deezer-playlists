import {Track} from "../../track/models/track";

export class Playlist {

  public tracks: Track[];
  public coverURL: string;
  public title: string;
  public authorName: string;

  constructor(tracks: Track[] = [], title: string, authorName: string, coverURL?: string) {
    this.tracks = tracks;
    this.title = title;
    this.authorName = authorName;
    if (coverURL)
      this.coverURL = coverURL;
  }
}
