/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import HeaderItem from './HeaderItem';
import { signOut, useSession } from 'next-auth/react';
import Account from './Account';
import Image from 'next/image';
import GROUP from '../public/icons/Group3.svg';
import ML from '../public/icons/GroupSm.svg';
import Nav from './Nav';
import Link from 'next/link';

function Header() {
  const { data: session } = useSession();

  return (
    <div className={`${!session ? 'blur-sm' : ''}`}>
      <header className="flex bg-[#ffff64] m-top-0 items-center xl:h-[4.5rem] lg:h-[3.5rem] md:h-[3rem] p-0 header z-0">
        <div className="w-1/3 px-20 max-w-2xl whitespace-nowrap z-10">
          {/* <Link
            href={'/contact'}
            className="opacity-0 text-[0.8rem] sm:opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100 group-hover:opacity-100 tracking-widest hover:scale-110"
          >
            CONTACT
          </Link> */}
          {/* <Link
            href={'about_us'}
            className="opacity-0 text-[0.8rem] sm:opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100 group-hover:opacity-100 tracking-widest hover:scale-110"
          >
            ABOUT US
          </Link> */}
        </div>
        <div className="flex w-1/3 justify-center -mb-10 z-40">
          <div className="huge:flex 4xl:flex 3xl:flex 2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden xxs:hidden">
            <Image
              layout="intrinsic"
              src={GROUP}
              height={100}
              width={400}
              className=""
              alt="LogoBig"
            />
          </div>
          <div className="md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
            <Image
              layout="intrinsic"
              src={ML}
              height={105}
              width={400}
              className=""
              alt="LogoSmall"
            />
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          {session ? <Account /> : null}
        </div>
      </header>
      <Nav className="z-50"></Nav>
    </div>
  );
}

export default Header;
