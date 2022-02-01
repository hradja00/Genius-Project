/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Header from '../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function account({ providers }) {
  return (
    <div className="flex items-center justify-center p-12 pt-0 -mt-8 z-50 text-black">
      <div className="bg-white rounded-lg shadow-2xl w-1/2 ">
        {/* header */}
        <header className="bg-black rounded-t-lg py-5 px-8 font-nunito text-5xl text-center text-[#E8E8E8] border-solid border-r border-l border-t">
          <div className="font-bold">Connect Spotify</div>
          {/* <div className="border-2 w-10 border-white inline-block"></div> */}
        </header>

        {/* info */}
        <div className="flex flex-col items-center justify-center p-8 bg-black border-solid border-r border-l">
          <img
            className="w-2/5 mb-5 "
            src="https://links.papareact.com/9xl"
            alt="spotifyIMG"
          ></img>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-[#18D860] p-8 rounded-full text-xl font-nunito font-bold"
                onClick={() => signIn(provider.id, { callbackUrl: '/charts' })}
              >
                Login with {provider.name}
              </button>
            </div>
          ))}
        </div>

        {/* sign in footer */}
        <footer className="bg-black rounded-b-lg py-5 px-8 font-nunito text-xl text-white border-solid border-r border-l border-b">
          <div className="">
            <p>Don't have Spotify?</p>
            <a
              href="https://www.spotify.com/hr-hr/signup"
              className="underline text-[#18D860] mt-10"
            >
              Create a free account
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
