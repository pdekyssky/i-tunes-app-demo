import { useState } from "react";

import MusicList from "../components/music/MusicList";
import MusicSearchBar from "../components/music/MusicSearchBar";
import PageContainer from "../components/PageContainer";
import type { ITunesSong, Song } from "../types/types";
import { buildITunesSearchUrl, mapITunesSongToSong } from "../utils/itunes";

const Music = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const res = await fetch(buildITunesSearchUrl(query));

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      const iTunesSongs = data.results
        .filter((song: ITunesSong) => song.kind === "song")
        .map(mapITunesSongToSong);

      setSongs(iTunesSongs);
    } catch (error) {
      console.error("Error fetching music data:", error);
    }
  };

  return (
    <div>
      <PageContainer className="pb-0 text-center">
        <h1 className="text-3xl font-semibold text-neutral-50">Music</h1>
      </PageContainer>
      <MusicSearchBar onSearch={handleSearch} />
      <MusicList songs={songs} />
    </div>
  );
};

export default Music;
