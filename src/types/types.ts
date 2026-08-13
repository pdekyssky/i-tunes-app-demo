export interface Song {
  id: number;
  artist: string;
  audioFile: string;
  artwork?: string;
  title: string;
  album: string;
}

export interface ITunesSong {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  previewUrl: string;
  kind?: string;
}
