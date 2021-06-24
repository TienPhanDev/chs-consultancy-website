import React from 'react';
import CloudHosting from 'views/CloudHosting';
import Main from 'layouts/Main';
import Head from "next/head"
import WithLayout from 'WithLayout';

const CloudPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <WithLayout
        component={CloudHosting}
        layout={Main}
      />
    </>
  )
};

export default CloudPage;