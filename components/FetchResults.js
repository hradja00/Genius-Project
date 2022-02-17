import React, { useEffect, useState } from 'react';
import useSpotify from '../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Thumbnail from './thumbnails/T_likedtracks';
import { SearchIcon } from '@heroicons/react/outline';
import Searchbar from './Searchbar';
import Footer from './Footer';

function FetchResults({ option }) {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  // const [folartists, setFolartists] = useState([]);
  //   const [recommendations, setRecommendations] = useState([]);
  const [info, setInfo] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  console.log(option);

  // Fetching

  useEffect(() => {
    if (spotifyApi.getAccessToken() && option === 'liked%20tracks') {
      spotifyApi.getMySavedTracks().then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'charts') {
      spotifyApi.getPlaylistTracks('37i9dQZEVXbNG2KDcFcKOF').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'new%20releases') {
      spotifyApi.getPlaylistTracks('593HKP3qHQXS0RLZmeeHly').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'hiphop') {
      spotifyApi.getPlaylistTracks('37i9dQZF1DX0XUsuxWHRQd').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'pop') {
      spotifyApi.getPlaylistTracks('37i9dQZF1DWTwnEm1IYyoj').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'rock') {
      spotifyApi.getPlaylistTracks('37i9dQZF1DWXRqgorJj26U').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'alternative') {
      spotifyApi.getPlaylistTracks('37i9dQZF1DWTwnEm1IYyoj').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    } else if (spotifyApi.getAccessToken() && option === 'electronic') {
      spotifyApi.getPlaylistTracks('37i9dQZF1DX4dyzvuaRJ0n').then((data) => {
        // console.log(data);
        setInfo(data.body.items);
      });
    }
  }, [session, spotifyApi, option]);

  // useEffect(() => {
  //   window.addEventListener('scroll', listenToScroll);
  //   return () => window.removeEventListener('scroll', listenToScroll);
  // }),[];

  const listenToScroll = () => {
    let heightToHideFrom = 320;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  console.log('FETCH RES', info);
  // console.log('INFO', info.at(0)?.track?.id);
  //   return (
  //     <div className="px-5 gap-5 my-10 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:flex flex-wrap justify-center">
  //       {folartists.map((artists) => (
  //         <Thumbnail key={artists.id} artists={artists} />
  //       ))}
  //     </div>
  //   );

  return (
    <div className="bg-black">
      <Searchbar />
      <div className="mt-10">
        <h2 className="text-3xl mx-16 my-3 font-nunito opacity-80 font-semibold tracking-wider">
          {option.toUpperCase().replace('%20', ' ')}
        </h2>
      </div>
      <div className="h-[0.1rem] w-full bg-gradient-to-r from-black via-white to-black mb-10"></div>
      <div className="px-16 gap-8 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-8 flex-wrap justify-center">
        {info.map((tracks) => (
          <Thumbnail key={tracks.id} tracks={tracks?.track} />
        ))}
        {/* <div className="fixed flex justify-center top-1 w-full z-50">
          {!isVisible && (
            <div id="hide" className="text-white text-3xl">
              <form
                action=""
                className="inline-block xl:w-3/5 lg:w-3/5 md:w-3/4 sm:w-3/4 px-2 py-2"
              >
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                  <SearchIcon className="w-5 h-10 absolute ml-3 pointer-events-none" />
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for a track"
                    autoComplete="off"
                    aria-label="Search for a track"
                    className="w-50 h-8 pr-3 pl-10 py-2 bg-[#2B2B2B] text-[#AFAFAF] text-sm font-semibold placeholder-gray-500 rounded-2xl border-none outline-none"
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                </div>
              </form>
            </div>
          )}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default FetchResults;
