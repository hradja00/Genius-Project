import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function T_likedtracks({ tracks }) {
  console.log('TRAKEEEE', tracks);
  return (
    <Link
      href={{
        pathname: '/tracks/[idtrack]',
        query: { idtrack: tracks?.id },
        // state: { artistId: tracks.track },
      }}
      passHref
    >
      <div className="p-2 bg-black group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
          className="rounded-lg"
          layout="responsive"
          src={tracks.album?.images.at(0).url}
          alt="artImg"
          height={640}
          width={640}
        ></Image>
        <div className="pt-2">
          <h2 className="mt-1 font-nunito text-[#E8E8E8] text-xl text-center transition-all duration-100 ease-in-out group-hover:font-bold">
            {tracks?.artists?.at(0)?.name} - {tracks?.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default T_likedtracks;
