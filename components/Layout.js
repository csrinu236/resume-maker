import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chenna Sreenu Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
