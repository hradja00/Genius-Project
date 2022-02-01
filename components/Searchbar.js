import { SearchIcon } from '@heroicons/react/outline';
import useSpotify from '../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Thumbnail from './thumbnails/T_likedtracks';
import { Router } from 'next/router';
import { useClientRouter } from 'use-client-router';

function Searchbar() {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useClientRouter();

  const pathname = router.pathname;
  console.log('PATHHHHH', pathname);

  const handleChange = (event) => {
    if (event === 'Backspace' || event === 'Delete') {
      setSearchTerm('');
    }
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && searchTerm != '') {
      spotifyApi.searchTracks(searchTerm).then((data) => {
        setSearchResults(data.body.tracks?.items);
      });
    } else if (spotifyApi.getAccessToken() && searchTerm == '') {
      setSearchResults('');
    }
  }, [session, spotifyApi, searchTerm]);

  useEffect(() => {
    setSearchTerm('');
  }, [session, pathname]);

  console.log('RESULTS SEARCHBAR', searchResults);
  console.log('SEARCH TERM', searchTerm);

  return (
    <div className="flex flex-col justify-center items-center h-auto w-full bg-black pt-4">
      <div className="huge:flex xl:flex lg:flex md:flex sm:hidden xs:hidden xxs:hidden">
        <h1 className="font-nunito font-semibold text-[2.5rem] text-[#E8E8E8] opacity-95 mt-10">
          Find Key, BPM, Popularity etc.
        </h1>
      </div>
      <form
        action=""
        className="inline-block xl:w-3/5 lg:w-3/5 md:w-3/4 sm:w-3/4 px-10 py-5 mb-5"
      >
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <SearchIcon className="w-5 h-10 absolute ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search for a track"
            autoComplete="off"
            aria-label="Search for a track"
            className="w-full h-11 sm:h-8 xs:h-8 xxs:h-8 pr-3 pl-10 py-2 bg-[#E8E8E8] font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            onChange={handleChange}
          />
        </div>
      </form>
      <div
        className={`${searchTerm == '' ? 'hidden' : 'flex-col w-full mt-7'}`}
      >
        <div className={''}>
          <h2 className="text-3xl mx-16 my-3 font-nunito opacity-80 font-semibold tracking-wider">
            Results for {String(searchTerm)}
          </h2>
        </div>
        <div className="h-[0.1rem] w-full bg-gradient-to-r from-black via-white to-black mb-10"></div>
      </div>
      <div
        className={`${
          searchTerm == ''
            ? 'hidden'
            : 'px-16 gap-8 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:flex flex-wrap justify-center mb-10 transition duration-100 ease-in'
        }`}
      >
        {searchResults == ''
          ? null
          : searchResults.map((tracks) => (
              <Thumbnail key={tracks.id} tracks={tracks} />
            ))}
      </div>
    </div>
  );
}

export default Searchbar;
