import Link from 'next/link';

function HeaderItem({ Icon, title }) {
  return (
    <Link href={title.replace(/ /g, '_').toLowerCase()} passHref>
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-black">
        <Icon className="h-8 mb-1 mt-2 group-hover:animate-bounce" />
        <p className="opacity-0 text-sm sm:opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default HeaderItem;
