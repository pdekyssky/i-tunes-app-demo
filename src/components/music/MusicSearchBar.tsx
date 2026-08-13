import { debounce } from "lodash";
import { useRef } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const MusicSearchBar = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const searchForMusic = () => {
    const searchString = searchInput.current?.value;
    if (searchString) onSearch(searchString);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForMusic();
  };

  const handleInput = debounce(() => {
    searchForMusic();
  }, 1000);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4 sm:p-5"
      >
        <label
          htmlFor="music-search"
          className="mb-3 block text-sm font-medium text-neutral-300"
        >
          Search your favorite music
        </label>
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            id="music-search"
            autoFocus
            type="text"
            aria-label="Search for music"
            placeholder="Search for music..."
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950 py-3 pl-11 pr-4 text-base text-neutral-100 placeholder-neutral-500 transition-colors focus-visible:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
            ref={searchInput}
            onChange={handleInput}
          />
        </div>
      </form>
    </div>
  );
};

export default MusicSearchBar;
