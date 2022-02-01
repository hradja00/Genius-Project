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
      <div className="min-w-max py-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
          className="rounded-lg"
          layout="intrinsic"
          src={tracks.album?.images.at(0).url}
          alt="artImg"
          height={200}
          width={200}
        ></Image>
        <div className="pt-2 max-w-fit">
          <h2 className="mt-1 text-ellipsis font-nunito text-[#E8E8E8] text-lg text-center transition-all duration-100 ease-in-out group-hover:font-bold">
            {tracks?.artists?.at(0)?.name} - {tracks?.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default T_likedtracks;
