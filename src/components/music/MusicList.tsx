import type { Song } from "../../types/types";
import MusicSong from "./MusicSong";

type Props = {
  songs: Song[];
};

const MusicList = ({ songs }: Props) => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-8">
      <ul className="space-y-4">
        {songs.map((song) => (
          <li key={song.id}>
            <MusicSong song={song} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
