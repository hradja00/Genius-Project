/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ChevronDownIcon } from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';

function Account() {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative mt-1 opacity-92">
      <Menu.Button className="AccountIcon inline-flex items-center text-black bg-gray-800 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-0.5 mr-8">
        <Image
          className="rounded-full h-10 w-10"
          src={session?.user.image}
          layout="intrinsic"
          height={40}
          width={40}
        ></Image>
        {/* <h2>{session?.user.name}</h2>
        <ChevronDownIcon className="h-5 w-5" /> */}
      </Menu.Button>
      <Menu.Items>
        <button className="logout" onClick={() => signOut()}>
          Log out
        </button>
      </Menu.Items>
    </Menu>
  );
}

export default Account;
