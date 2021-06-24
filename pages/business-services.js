import React from 'react';
import Enterprise from 'views/Enterprise';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import Head from "next/head"

const BusinessPage = () => {
  return (
    <>
      <Head>
        <title>Enterprise Services</title>
      </Head>
      <WithLayout
        component={Enterprise}
        layout={Main}
      />
    </>
  )
};

export default BusinessPage;