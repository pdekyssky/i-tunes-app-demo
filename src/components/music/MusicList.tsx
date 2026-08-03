//import {useState} from "react";
import { type Song } from "../../types/types";

//children
import MusicSong from "./MusicSong";

type Props = {
  songs: Song[]
};

const MusicList = (props: Props) => {
  const songs = props.songs;
  
  return <div>
    <ul>
    {songs.map(song => (
      <li key={song.id}>
          <MusicSong song={song}/>
      </li>
    ))
    }
    </ul>
  </div>;
};

export default MusicList;
