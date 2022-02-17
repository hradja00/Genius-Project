import React from 'react';
import Image from 'next/image';

export default function Leftslika({ trackData }) {
  return (
    <Image
      height={300}
      width={300}
      className="flex rounded-lg pt-0"
      src={trackData?.album?.images?.at(0)?.url}
      alt=""
    ></Image>
  );
}
