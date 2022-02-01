/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import useSpotify from '../../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Similar from './Similar';

function LeftSideMain({ artistTracks, trackData, trackId }) {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  //   console.log(artistTracks.at(0)?.tracks?.at(1)?.id);
  const [trackFeatures, setTrackFeatures] = useState([]);
  const [newTracks, setNewTracks] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && session) {
      let track1 =
        artistTracks?.at(0)?.tracks?.at(0)?.id == trackId
          ? artistTracks?.at(0)?.tracks?.at(1)?.id
          : artistTracks?.at(0)?.tracks?.at(0)?.id;
      let track2 =
        artistTracks?.at(0)?.tracks?.at(2)?.id == trackId
          ? artistTracks?.at(0)?.tracks?.at(3)?.id
          : artistTracks?.at(0)?.tracks?.at(2)?.id;
      let track3 =
        artistTracks?.at(0)?.tracks?.at(4)?.id == trackId
          ? artistTracks?.at(0)?.tracks?.at(5)?.id
          : artistTracks?.at(0)?.tracks?.at(4)?.id;
      console.log(artistTracks?.at(0)?.tracks?.at(1)?.id);
      if ((track1 && track2 && track3) != null) {
        spotifyApi
          .getAudioFeaturesForTracks([track1, track2, track3])
          .then((data) => {
            setTrackFeatures((trackFeatures) => data.body);
          });
        spotifyApi.getTracks([track1, track2, track3]).then((data) => {
          setNewTracks((newTracks) => data.body);
        });
      }
    }
  }, [session, spotifyApi, artistTracks, trackId]);

  console.log('ARTIST TRACKS', artistTracks);

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
    <div>
      {/* <Image
          layout="intrinsic"
          src={trackData.at(0)?.album?.images?.at(0)?.url}
          alt="CoverArt"
          height={300}
          width={300}
          className="rounded-md pt-0"
        /> */}
      <img
        height={300}
        width={300}
        className="flex rounded-lg pt-0"
        src={trackData?.at(0)?.album?.images?.at(0)?.url}
        alt=""
      ></img>
      <h2 className="font-nunito font-boldd mt-7 mb-3 mr-20 text-[#E8E8E8] text-md tracking-wider opacity-[0.90]">
        Similar to
        {' ' + trackData.at(0)?.artists?.at(0)?.name} - {trackData.at(0)?.name}
      </h2>
      <div className="text-[#E8E8E8] 3xl:visible 2xl:visible xl:visible lg:invisible md:invisible sm:invisible">
        <Similar
          trackFeatures={trackFeatures}
          newTracks={newTracks}
          keys={keys}
          millisToMinutesAndSeconds={millisToMinutesAndSeconds}
        />
      </div>
      <div>{/* <Image></Image> */}</div>
    </div>
  );
}

export default LeftSideMain;
