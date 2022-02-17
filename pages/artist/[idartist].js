/* eslint-disable @next/next/no-img-element */
import FetchResults from '../../components/FetchResults';
import ThumbnailH from '../../components/thumbnails/T_horizontal';
import { useClientRouter } from 'use-client-router';
import { useEffect, useState } from 'react';
import useSpotify from '../../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Artistslika from '../../components/artist_details/Artistslika';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

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
        <div className="items-center h-full flex flex-col justify-center">
          <h1 className="text-7xl font-nunito text-center text-[#E8E8E8] opacity-95 md:mt-8 hover:cursor-pointer">
            <a href={artistData?.uri}>{artistData.name}</a>
          </h1>
          <div className="p-5">
            <div className="text-[#18D860] hover:cursor-pointer">
              <a href={artistData?.uri}>
                <FontAwesomeIcon icon={faSpotify} height={60} width={60} />
              </a>
            </div>
            {/* <Link href={artistData?.external_urls?.spotify}></Link> */}
          </div>
        </div>
        <div className="items-center">
          <img
            width={400}
            height={300}
            src={artistData.images?.at(0)?.url}
            alt=""
            className="opacity-70 mr-auto ml-auto rounded-lg flex"
          ></img>

          {/* <h2 className="font-nunito text-4xl font-semibold text-[#E8E8E8] mt-5">
            {artistData.name}
          </h2> */}
        </div>
        <div className="">
          <div className="flex flex-row items-center justify-center h-full">
            <div className="w-1/2">
              <div className="gap-20 items-center px-5">
                <h2 className="text-4xl font-nunito font-thin py-5">
                  Followers:
                </h2>
                <h2 className="text-4xl font-nunito font-thin py-5">Genre:</h2>
                <h2 className="text-4xl font-nunito font-thin py-5">
                  Popularity:
                </h2>
              </div>
            </div>
            <div className="w-1/2">
              <div className="gap-20 items-center px-5 text-center">
                <h2 className="text-4xl font-light py-5 text-[#E8E8E8]">
                  {artistData.followers?.total}
                </h2>
                <h2 className="text-4xl font-light py-5 mr-2 text-[#E8E8E8] whitespace-nowrap">
                  {artistData.genres?.at(0)}
                </h2>
                <h2 className="text-4xl font-light py-5 text-[#E8E8E8]">
                  {artistData.popularity}
                </h2>
              </div>
            </div>
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
      <Footer />
    </div>
  );
}

export default Results;
