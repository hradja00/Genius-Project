import { useRouter } from 'next/router';
import Link from 'next/link';
import requests from '../utils/requests';
import React, { useEffect, useState } from 'react';
import FetchResults from './FetchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';

function Nav() {
  const router = useRouter();
  const [effect, setEffect] = useState(false);
  const [option, setOption] = useState();

  return (
    <div>
      <nav className="relative navbar shadow-sm xl:h-[4.5rem] lg:h-[3.5rem] md:h-[3rem]">
        <div className="flex 2xl:justify-center before:items-center px-10 py-4 sm:px-20 text-2xl whitespace-nowrap sm:space-x-20 xs:space-x-10 xxs:space-x-7 overflow-x-scroll scrollbar-hide">
          {Object.entries(requests).map(([key, { title, url }]) => (
            <Link
              key={key}
              passHref
              href={{
                pathname: '/categories/[idnav]',
                query: { idnav: title },
              }}
              // href={'/categories/' + title.replace(/ /g, '').toLowerCase()}
              // onClick={() =>
              //   // router.push(
              //   //   `${title.replace(/ /g, '').toLowerCase()}`
              //   // )
              //   <Link href={"/categories" + title.replace(/ /g, '').toLowerCase()}></Link>
              // }
            >
              <a className="text-[#E8E8E8] opacity-90 cursor-pointer text-center transition duration-100 transform hover:scale-125 active:scale-125 hover:text-white active:text-gray-300">
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#121111] h-16 w-[3%]" />
        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#121111] h-16 w-[3%]" />
        {/* <div className="border-b border-[#AFAFAF]"></div> */}
        <div className="h-[0.05rem] w-full bg-gradient-to-r from-[#1c1c1c] via-[#e3e3e3] to-black"></div>
      </nav>
    </div>
  );
}

export default Nav;
