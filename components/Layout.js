import Header from './Header';
import Footer from './Footer';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export const Layout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <div className="content flex flex-col min-h-screen">
      <Head>
        <title>Musicstats</title>
        <meta name="Genius" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
