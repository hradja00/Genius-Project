import React from 'react';
import Image from 'next/image';

export default function Artistslika(artistData) {
  return (
    <Image
      width={400}
      height={600}
      src={artistData.images?.at(0)?.url}
      alt=""
      className="opacity-70 mr-auto ml-auto rounded-b-lg border-b border-l border-r flex"
    ></Image>
  );
}
