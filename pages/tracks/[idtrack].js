import { useClientRouter } from 'use-client-router';
import Details from '../../components/details/Details';
import React, { useEffect, useState } from 'react';
import useSpotify from '../../hooks/useSpotify';

function Track() {
  const router = useClientRouter();
  const trackId = router.pathname;
  const spotifyApi = useSpotify();

  return (
    <div>
      <Details
        trackId={trackId.slice(8)}
        // artistId={trackData?.artists?.at(0)?.id}
      />
    </div>
  );
}

export default Track;
