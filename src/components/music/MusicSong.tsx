import type { Song } from "../../types/types";
//import { truncate } from "lodash";

type Props = {
  song: Song
};

const MusicSong = (props: Props) => {
  const { song } = props

// make songs string shorter
  const songify = (song: Song) => {
    return song.artist + ' - ' + song.title
  }

  // const shorten = (str: string, len: number): string => {
  //   return truncate(str, { length: len })
  // }
  
  //template
  return <div>
     <h2>{songify(song)}</h2>
     <div>
        { song.artwork &&  <img src={song.artwork} alt='Album cover artwork' /> }
        <audio controls src={song.audioFile} />
     </div>
     <div>{song.album}</div>
  </div>;
};

export default MusicSong;
