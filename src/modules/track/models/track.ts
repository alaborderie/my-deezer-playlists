export class Track {

  public duration: string;
  public title: string;
  public artistName: string;

  constructor(title: string, duration: string, artistName: string) {
    this.title = title;
    this.duration = duration;
    this.artistName = artistName;
  }
}
