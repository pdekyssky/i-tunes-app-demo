import { useRef } from "react";
import {debounce} from "lodash";

type Props = {
  onSearch: (data: string) => void
};

const MusicSearchBar = (props: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);
 
     //form submit handler
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
    searchForMusic();
    }

    //input element
  const handleInput = debounce((e:React.ChangeEvent<HTMLInputElement>) => {
     searchForMusic();
  }, 1000)

  //search for music
  const searchForMusic = () => { 
    let searchString = searchInput.current?.value
    if(searchString) props.onSearch(searchString)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
        <input 
            autoFocus
            type="text" 
            ref={searchInput}
            onChange={handleInput}/>
        </form>
    </div>
    )
};

export default MusicSearchBar;
