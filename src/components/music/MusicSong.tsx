import type { Song } from "../../types/types";

type Props = {
  song: Song;
};

const MusicSong = ({ song }: Props) => {
  return (
    <article className="group rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/80 sm:p-5">
      <div className="flex gap-4 sm:gap-5">
        {song.artwork && (
          <div className="shrink-0">
            <img
              src={song.artwork}
              alt={`${song.album} album cover`}
              className="h-20 w-20 rounded-lg object-cover shadow-md ring-1 ring-neutral-700/60 transition-transform group-hover:scale-[1.02] sm:h-24 sm:w-24"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold text-neutral-50 sm:text-lg">
            {song.title}
          </h2>
          <p className="mt-0.5 truncate text-sm text-neutral-400">{song.artist}</p>
          <p className="mt-2 inline-block truncate rounded-full bg-neutral-800/80 px-2.5 py-0.5 text-xs text-neutral-400">
            {song.album}
          </p>

          <audio
            controls
            src={song.audioFile}
            preload="none"
            className="mt-3 w-full"
          />
        </div>
      </div>
    </article>
  );
};

export default MusicSong;
