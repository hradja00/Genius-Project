import { ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const { data: session } = useSession();

  return (
    <footer
      className={`footer justify-center h-auto left-0 right-0 bottom-0 mt-auto ${
        !session ? 'blur-sm' : ''
      }`}
    >
      <div className="mt-10 h-[0.1rem] w-full bg-[#292929] "></div>
      <div className="inline-flex w-full">
        <div className="w-1/2">
          <div className="py-12 px-32">
            <h1 className="font-nunito font-semibold text-[1.9rem]">
              <span className="text-[#ffff64]">MusicStats</span>&nbsp;is the
              world’s biggest collection of song stats and musical knowledge
            </h1>
          </div>
        </div>
        <div className="w-1/2">
          <div className="py-[5.5rem] justify-center flex space-x-10">
            <div className="hover:cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} height={45} width={45} />
            </div>
            <div className="hover:cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} height={45} width={45} />
            </div>
            <div className="hover:cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} height={45} width={45} />
            </div>
            <div className="hover:cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} height={45} width={45} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xs opacity-70 font-nunito text-center pb-5 -mt-5">
          © 2022 MusicStats Inc.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;

/*<div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap">
          <HeaderItem title="SHARE" Icon={ShareIcon} />
          <HeaderItem title="LIKE" Icon={ThumbUpIcon} />
        </div>*/
