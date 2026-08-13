import type { ITunesSong, Song } from "../types/types";

export function mapITunesSongToSong({
  trackId: id,
  trackName: title,
  artistName: artist,
  collectionName: album,
  artworkUrl100: artwork,
  previewUrl: audioFile,
}: ITunesSong): Song {
  return { id, title, artist, album, artwork, audioFile };
}

export function buildITunesSearchUrl(query: string, limit = 5): string {
  return `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=${limit}`;
}
