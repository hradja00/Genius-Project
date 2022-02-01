/* eslint-disable @next/next/no-img-element */
import FetchResults from '../../components/FetchResults';
import ThumbnailH from '../../components/thumbnails/T_horizontal';
import { useClientRouter } from 'use-client-router';
import { useEffect, useState } from 'react';
import useSpotify from '../../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

function Results() {
  const router = useClientRouter();
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [info, setInfo] = useState([]);
  const [artistData, setArtistData] = useState([]);

  const artistId = router.query.idartist;

  useEffect(() => {
    if (spotifyApi.getAccessToken() && session && artistId != null) {
      spotifyApi.getArtistTopTracks(artistId, 'US').then((data) => {
        setInfo(data.body.tracks);
      });
      spotifyApi.getArtist(artistId).then((data) => {
        setArtistData(data.body);
      });
    }
  }, [session, spotifyApi, artistId]);

  console.log('ARTIST DATA', artistData);

  return (
    <div className="">
      <div className="px-16 gap-8 sm:grid md:grid lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-3 flex-wrap justify-center">
        <div className="items-center">
          <h1 className="text-7xl font-nunito text-center">
            {artistData.name}
          </h1>
        </div>
        <div className="items-center -mt-[0.42rem]">
          <img
            width={400}
            height={600}
            src={artistData.images?.at(0)?.url}
            alt=""
            className="opacity-70 mr-auto ml-auto rounded-b-lg border-b border-l border-r flex"
          ></img>
          {/* <h2 className="font-nunito text-4xl font-semibold text-[#E8E8E8] mt-5">
            {artistData.name}
          </h2> */}
        </div>
        <div className="mt-16 tracking-wider">
          <div className="flex gap-20 items-center p-5">
            <h2 className="text-4xl font-nunito">Followers</h2>
            <h2 className="text-2xl">{artistData.followers?.total}</h2>
          </div>
          <div className="flex gap-20 items-center p-5">
            <h2 className="text-4xl font-nunito">Genre</h2>
            <h2 className="text-2xl">
              {artistData.genres?.at(0)}, {artistData.genres?.at(1)}
            </h2>
          </div>
          <div className="flex gap-20 items-center p-5">
            <h2 className="text-4xl font-nunito">Popularity</h2>
            <h2 className="text-2xl">{artistData.popularity}</h2>
          </div>
          <div className="flex gap-20 items-center p-5">
            <h2 className="text-4xl font-nunito">Listen on Spotify</h2>
            {/* <Link href={artistData?.external_urls?.spotify}></Link> */}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="px-16 py-2 justify-center items-center sm:px-20">
          <h1 className="font-nunito text-4xl font-semibold text-[#E8E8E8]">
            Top 10
          </h1>
        </div>
        <div className="h-[0.05rem] w-full bg-gradient-to-r from-black via-white to-black mb-10"></div>
        <div className="flex px-16 gap-8 mb-10 overflow-x-scroll scrollbar-hide">
          {info.map((tracks) => (
            <ThumbnailH key={tracks.id} tracks={tracks} />
          ))}
        </div>

        <div className="px-16 mt-12 py-2 justify-center items-center sm:px-20">
          <h1 className="font-nunito text-4xl font-semibold text-[#E8E8E8]">
            Similar to {artistData.name}
          </h1>
        </div>
        <div className="h-[0.1rem] w-full bg-gradient-to-r from-black via-white to-black mb-10"></div>
        <div className="flex px-16 gap-8 mb-10 overflow-x-scroll scrollbar-hide ">
          {info.map((tracks) => (
            <ThumbnailH key={tracks.id} tracks={tracks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
