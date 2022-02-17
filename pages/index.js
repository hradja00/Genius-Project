import Head from 'next/head';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import useSpotify from '../hooks/useSpotify';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      {/*Header></Header>*/}

      {/* <Results /> */}
    </div>
  );
}

/*export async function getServerSideProps(context){
  const genre = context.query.genre;

}*/
// axios.get('https://api.spotify.com/v1/recommendations', {
//     headers: { Authorization: `token ${NextAuth}` },
//   });
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
