import { useState } from "react"
import type { Song } from "../types/types"

import MusicSearchBar from "../components/music/MusicSearchBar"
import MusicList from "../components/music/MusicList"

interface songFromITunes {
  trackId: number,
  trackName: string,
  artistName: string,
  collectionName: string,
  artworkUrl100: string,
  previewUrl: string,
  kind?: string
}
//component
const Music = () => {

  //state
  const [songs, setSongs] = useState( [] )


  //fetch from itunes api
  const handleSearch = async (query: string) => {
    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=5`
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error('Network response was not okey')
      }
      const data = await res.json()
      //filter songs add to state
      let iTunesSongs = data.results.filter(
        (song:songFromITunes)=> song.kind === 'song' ).
        map( (song: songFromITunes) => extractData(song))


      setSongs(iTunesSongs)

    } catch (error) {
      console.log('Error fetching music data:', error)
    }
  }

 //destructure itunes data
   const extractData = ( { 
    trackId: id,
    trackName: title,
    artistName: artist,
    collectionName: album,
    artworkUrl100: artwork,
    previewUrl: audioFile
  } : songFromITunes) => {
     return { id, title, artist, album, artwork, audioFile } as Song
   }

   return ( 
  <div>
    <h1>Music</h1>
    <MusicSearchBar onSearch = {handleSearch}/>
    <MusicList songs = {songs}/> 
  </div>
  )
}
export default Music
