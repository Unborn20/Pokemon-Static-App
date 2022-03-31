import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location;

export const Layout: FC<Props> = ({ children, title }) => {  
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='El Unborn' />
        <meta name='description' content='Info about the pokemon' />
        <meta name='keywords' content={`${title || 'Pokemon App'}`} />
        <meta
          property='og:title'
          content={`Pokeinfo about: ${title}`}
        />
        <meta
          property='og:description'
          content={`This is the page of ${title}`}
        />
        <meta
          property='og:image'
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar></Navbar>

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
