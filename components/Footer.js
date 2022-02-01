import { ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function Footer() {
  const { data: session } = useSession();

  return (
    <footer
      className={`footer flex justify-center h-auto left-0 right-0 bottom-0 mt-auto ${
        !session ? 'blur-sm' : ''
      }`}
    >
      <div className="">
        <div className="flex-col justify-evenly font-nunito text-lg py-3">
          <a href="about_us">About Us | </a>
          <a href="contact">Contact | </a>
          <a href="account">Account</a>
        </div>
        <div className="py-0">
          {/* <Link href="/home" passHref>
            <Image
              alt="logo"
              className="object-contain hover:scale-125 hover:cursor-pointer"
              src="https://rebrand.ly/geniuslogo"
              width={200}
              height={80}
            />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/*<div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap">
          <HeaderItem title="SHARE" Icon={ShareIcon} />
          <HeaderItem title="LIKE" Icon={ThumbUpIcon} />
        </div>*/
