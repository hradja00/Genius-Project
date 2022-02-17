/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import useSpotify from '../../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

function Similar({ track, keys, millisToMinutesAndSeconds }) {
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [trackFeatures, setTrackFeatures] = useState([]);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && session) {
      spotifyApi.getAudioFeaturesForTrack(track?.id).then((data) => {
        setTrackFeatures((trackFeatures) => data.body);
      });
    }
  }, [session, spotifyApi, track]);

  console.log('SIMILAR PAGE', track);

  return (
    <div>
      <Link
        href={{
          pathname: '/tracks/[idtrack]',
          query: {
            idtrack: track?.id,
          },
        }}
        passHref
      >
        <div className="flex mr-16 text-sm py-3 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 opacity-90 hover:opacity-100">
          <div className="w-1/3 pr-2">
            <Image
              height={90}
              width={90}
              layout="intrinsic"
              className="rounded-lg pt-0"
              src={track?.album?.images?.at(0)?.url}
              alt=""
            ></Image>
          </div>
          <div className="flex-col w-2/3">
            <h2 className="pr-3 py-1 font-semibold font-nunito text-md">
              {track?.artists?.at(0)?.name} -{' ' + track?.name}
            </h2>
            <div className="flex gap-1 pr-3 py-1 font-semibold font-nunito text-md text-[#a4a4a4] opacity-80">
              <h2>{millisToMinutesAndSeconds(trackFeatures?.duration_ms)}</h2>
              <h2>•</h2>
              <h2>
                {Number(trackFeatures?.tempo).toFixed(0)}
                bpm
              </h2>
              <h2>•</h2>
              <h2>
                {keys[Number(trackFeatures?.key)]}
                {trackFeatures?.mode == 1 ? 'maj' : 'min'}
              </h2>
            </div>
          </div>
        </div>
      </Link>

      {/* <Link
        href={{
          pathname: '/tracks/[idtrack]',
          query: {
            idtrack: trackFeatures.audio_features?.at(1)?.id,
          },
        }}
        passHref
      >
        <div className="flex mr-16 text-sm py-3 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 opacity-90 hover:opacity-100">
          <img
            height={90}
            width={90}
            className="flex rounded-lg pt-0"
            src={track?.tracks?.at(1)?.album?.images?.at(0)?.url}
            alt=""
          ></img>
          <div className="flex-col">
            <h2 className="px-3 py-1 font-semibold font-nunito text-md">
              {track.tracks?.at(1)?.artists?.at(0)?.name} -
              {' ' + track.tracks?.at(1)?.name}
            </h2>
            <div className="flex gap-1 px-3 py-1 font-semibold font-nunito text-md text-[#a4a4a4] opacity-80">
              <h2>
                {millisToMinutesAndSeconds(
                  trackFeatures.audio_features?.at(1)?.duration_ms
                )}
              </h2>
              <h2>•</h2>
              <h2>
                {Number(trackFeatures.audio_features?.at(1)?.tempo).toFixed(0)}
                bpm
              </h2>
              <h2>•</h2>
              <h2>
                {keys[Number(trackFeatures.audio_features?.at(1)?.key)]}
                {trackFeatures.audio_features?.at(0)?.mode == 1 ? 'maj' : 'min'}
              </h2>
            </div>
          </div>
        </div>
      </Link>

      <Link
        href={{
          pathname: '/tracks/[idtrack]',
          query: {
            idtrack: trackFeatures.audio_features?.at(2)?.id,
          },
        }}
        passHref
      >
        <div className="flex mr-16 text-sm py-3 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 opacity-90 hover:opacity-100">
          <img
            height={90}
            width={90}
            className="flex rounded-lg pt-0"
            src={track.tracks?.at(2)?.album?.images?.at(0)?.url}
            alt=""
          ></img>
          <div className="flex-col">
            <h2 className="px-3 py-1 font-semibold font-nunito text-md">
              {track.tracks?.at(2)?.artists?.at(0)?.name} -
              {' ' + track.tracks?.at(2)?.name}
            </h2>
            <div className="flex gap-1 px-3 py-1 font-semibold font-nunito text-md text-[#a4a4a4] opacity-80">
              <h2>
                {millisToMinutesAndSeconds(
                  trackFeatures.audio_features?.at(2)?.duration_ms
                )}
              </h2>
              <h2>•</h2>
              <h2>
                {Number(trackFeatures.audio_features?.at(2)?.tempo).toFixed(0)}
                bpm
              </h2>
              <h2>•</h2>
              <h2>
                {keys[Number(trackFeatures.audio_features?.at(2)?.key)]}
                {trackFeatures.audio_features?.at(0)?.mode == 1 ? 'maj' : 'min'}
              </h2>
            </div>
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default Similar;
