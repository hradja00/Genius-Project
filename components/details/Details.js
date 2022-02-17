/* eslint-disable @next/next/no-img-element */
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSpotify from '../../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { fetchData } from 'next-auth/client/_utils';
import Script from 'next/script';
import Link from 'next/link';
import LeftSideMain from './LeftSideMain';
import Similar from './Similar';
import Leftslika from './Leftslika';
import Footer from '../Footer';

function Details({ trackId, artistId }) {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [trackFeatures, setTrackFeatures] = useState([]);
  const [trackData, setTrackData] = useState(['']);
  const [artistTracks, setArtistTracks] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && session) {
      spotifyApi.getAudioFeaturesForTrack(trackId).then((data) => {
        setTrackFeatures((trackData) => data.body);
      });
      spotifyApi.getTrack(trackId).then((data) => {
        setTrackData((trackData) => data.body);
      });
    }
  }, [session, spotifyApi, trackId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && session) {
      let response = trackData?.artists?.at(0)?.id;
      if (response != null)
        spotifyApi
          .getRecommendations({ seed_artists: [String(response)], limit: 3 })
          .then((data) => {
            setArtistTracks((artistTracks) => data.body.tracks);
          });
    }
  }, [session, spotifyApi, trackData]);

  console.log('Track Data', trackData);
  console.log('Artist Tracks', artistTracks);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  const keys = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  return (
    //SEARCHBAR

    <div className="bg-black">
      <div className="flex flex-col justify-center items-center h-auto w-full bg-black pb-8">
        <form action="" className="inline-block w-full px-16 mt-6">
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <SearchIcon className="w-5 h-10 text-gray-400 absolute ml-3 pointer-events-none" />
            <input
              type="text"
              name="search"
              placeholder="Search for another track"
              autoComplete="off"
              aria-label="Search for another track"
              className="w-full h-8 pr-3 pl-10 py-2 bg-[#2B2B2B] font-semibold placeholder-gray-500 text-[#E8E8E8] rounded-xl border-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="flex w-full h-auto jusitfy-center px-16 py-5 -mt-5">
        {/* LEFT SIDE */}
        <div className="w-1/4">
          {/* {let trackImg = trackData.album?.images?.at(0)
            <Image
              height={300}
              width={300}
              className="flex rounded-lg pt-0"
              src={+}
              alt=""
            >
            </Image>} */}

          {/* <LeftSideMain
            artistTracks={Array(artistTracks)}
            trackData={Array(trackData)}
            trackId={String(trackId)}
          /> */}
          <img
            height={300}
            width={300}
            className="flex rounded-lg pt-0"
            src={trackData?.album?.images?.at(0)?.url}
            alt=""
          ></img>
          <div>
            <h2 className="font-nunito font-boldd mt-7 mb-3 mr-20 text-[#E8E8E8] text-md tracking-wider opacity-[0.90]">
              Similar to
              {' ' + trackData.artists?.at(0)?.name} - {trackData.name}
            </h2>
          </div>

          {artistTracks.map((track) => (
            <Similar
              key={track.id}
              track={track}
              keys={keys}
              millisToMinutesAndSeconds={millisToMinutesAndSeconds}
            />
          ))}
        </div>
        {/* RIGHT SIDE */}

        <div className="flex-col w-3/4 -ml-10 tracking-wider">
          <div className="">
            <h1 className="text-5xl text-[#E8E8E8] font-nunito font-semibold mt-2">
              {trackData.name}
            </h1>
            <Link
              href={{
                pathname: '/artist/[idartist]',
                query: { idartist: trackData?.artists?.at(0)?.id },
                // state: { artistId: tracks.track },
              }}
              passHref
            >
              <h2 className="flex font-nunito text-md text-[#E8E8E8] ml-1 font-semibold cursor-pointer">
                {trackData.artists?.at(0)?.name}
              </h2>
            </Link>
          </div>
          {/* BASIC STATS */}
          <div className="flex bg-black text-white text-center py-4 mt-[3.5rem] tracking-wider xl:flex-row lg:flex-row md:flex-col md:items-center md:py-4">
            <div className="w-1/4 border-r ">
              <h2 className="text-md">LENGTH</h2>
              <h2 className="text-4xl mt-2">
                {millisToMinutesAndSeconds(trackFeatures?.duration_ms)}
              </h2>
            </div>
            <div className="w-1/4 border-r">
              <h2 className="text-md">BPM</h2>
              <h2 className="text-4xl mt-2 ">
                {Number(trackFeatures?.tempo).toFixed(0)}
              </h2>
            </div>
            <div className="w-1/4 border-r">
              <h2 className="text-md">KEY</h2>
              <h2 className="text-4xl mt-2">
                {keys[trackFeatures?.key]}
                {trackFeatures?.mode == 1 ? ' Major' : ' Minor'}
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className="text-md">LOUDNESS</h2>
              <h2 className="text-4xl mt-2">{trackFeatures?.loudness} db</h2>
            </div>
          </div>

          {/* BARS */}
          {/* <Script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></Script> */}
          <div className="flex h-auto text-white mt-[3rem] ml-2 gap-20 xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col sm:items-center">
            {/* Left Side */}

            <div className="w-1/2">
              <div className="w-full pr-16 py-2">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-md">
                  Popularity
                </h2>
                <div className="relative flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  {/* <div
                    className="absolute bg-pink-600 h-6 rounded-full blur"
                    style={{
                      width: `${Number(trackData?.popularity).toFixed(0)}%`,
                    }}
                  ></div> */}
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(trackData?.popularity).toFixed(0)}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackData?.popularity).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="w-full pr-16 py-2">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medium">
                  Energy
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(trackFeatures?.energy * 100).toFixed(
                        0
                      )}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.energy * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="w-full pr-16 py-2">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medium">
                  Speechiness
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(
                        trackFeatures?.speechiness * 100
                      ).toFixed(0)}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.speechiness * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="w-full pr-16 py-2">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medium">
                  Instrumentalness
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(
                        trackFeatures?.instrumentalness * 100
                      ).toFixed(0)}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.instrumentalness * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="w-1/2">
              <div className="w-full pr-16 py-2 ">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medium">
                  Danceability
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(
                        trackFeatures?.danceability * 100
                      ).toFixed(0)}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.danceability * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="w-full pr-16 py-2 ">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medim ">
                  Positiveness
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(trackFeatures?.valence * 100).toFixed(
                        0
                      )}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.valence * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="w-full pr-16 py-2">
                <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medim ">
                  Liveness
                </h2>
                <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                  <div
                    className={
                      'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                    }
                    style={{
                      width: `${Number(trackFeatures?.liveness * 100).toFixed(
                        0
                      )}%`,
                    }}
                  ></div>
                  <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                    {Number(trackFeatures?.liveness * 100).toFixed(0)}%
                  </h2>
                </div>
              </div>

              <div className="invisible">
                <div className="w-full pr-16 py-2">
                  <h2 className="text-3xl font-nunito text-[#E8E8E8] font-medium">
                    Danceability
                  </h2>
                  <div className="flex bg-black h-5 mb-6 mt-3 rounded-full items-center opacity-90">
                    <div
                      className={
                        'relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 rounded-full h-4 opacity-90'
                      }
                      style={{
                        width: `${Number(
                          trackFeatures?.danceability * 100
                        ).toFixed(0)}%`,
                      }}
                    ></div>
                    <h2 className="text-2xl font-nunito text-[#E8E8E8] font-medium ml-2">
                      {Number(trackFeatures?.danceability * 100).toFixed(0)}%
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
