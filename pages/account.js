/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Header from '../components/Header';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import MainPage from '../public/Images/mainpage.png';
import Bar from '../public/Images/bar.jpg';

export default function account({ providers }) {
  return (
    <div className="flex items-center justify-center z-50 text-black">
      <div className="rounded-lg shadow-2xl w-full">
        {/* header */}
        {/* <header className="rounded-t-lg py-5 px-8 font-nunito text-5xl text-center text-[#E8E8E8] border-solid border-r border-l border-t">
          <div className="font-light"> </div>
        </header> */}

        {/* info */}

        <div className="flex text-[#E8E8E8]">
          <div className="w-1/2">
            <div className="py-12 px-32">
              <h1 className="font-nunito font-semibold text-[1.9rem]">
                <span className="text-[#ffff64]">MusicStats</span>&nbsp;is the
                world’s biggest collection of song stats and musical knowledge.
              </h1>
            </div>
          </div>
          <div className="w-1/2 flex h-full items-center justify-center pt-8 pr-[3.5rem]">
            <div className="">
              {/* <Image
                src={MainPage}
                alt="mainpage"
                height={230}
                width={407}
                layout="intrinsic"
                className="rounded-sm"
              ></Image> */}
              <div className="">
                <FontAwesomeIcon
                  icon={faRecordVinyl}
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-[#E8E8E8] pt-5">
          <div className="w-1/2 flex justify-center">
            <div className="">
              <Image
                src={Bar}
                alt="mainpage"
                height={120}
                width={525}
                layout="intrinsic"
                className="rounded-sm"
              ></Image>
            </div>
          </div>
          <div className="w-1/2">
            <div className="py-12 px-32">
              <h1 className="font-nunito font-semibold text-[1.9rem]">
                <span className="text-[#ffff64]">We</span>&nbsp;are a closed
                community of music enthusiasts.
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[0.05rem] w-full bg-gradient-to-r from-black via-white to-black mb-10"></div>
        <div className="py-6 px-32 text-center">
          <h1 className="font-nunito font-semibold text-[1.9rem] text-[#E8E8E8]">
            &nbsp;To begin your{' '}
            <span className="text-[#ffff64]">MusicStats</span> search, connect
            your <span className="text-[#18D860]">Spotify</span> account
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center p-5 bg-black border-solid">
          {/* <div className="p-2 text-[#18D860]">
            <FontAwesomeIcon icon={faSpotify} height={60} width={60} />
          </div> */}
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-[#18D860] py-6 px-12 rounded-full text-lg font-bold font-nunito hover:text-[#d5d5d5] text-black"
                onClick={() => signIn(provider.id, { callbackUrl: '/charts' })}
              >
                Login with {provider.name}
              </button>
            </div>
          ))}
        </div>

        {/* sign in footer */}
        <footer className="bg-black rounded-b-lg py-5 px-8 font-nunito text-xl text- text-center">
          <div className="text-[#E8E8E8] opacity-95">
            <p>Don't have Spotify?</p>
            <a
              href="https://www.spotify.com/hr-hr/signup"
              className="underline text-[#18D860] mt-10 opacity-90"
            >
              Create a free account
            </a>
          </div>
        </footer>
        {/* <footer className="rounded-b-lg py-5 px-8 font-nunito text-5xl text-center text-[#E8E8E8] border-solid border-r border-l border-b">
          <div className="font-light"> </div>
        </footer> */}
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
