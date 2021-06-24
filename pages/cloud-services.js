import React from 'react';
import CloudHosting from 'views/CloudHosting';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CloudPage = () => {
  return (
    <WithLayout
      component={CloudHosting}
      layout={Main}
    />
  )
};

export default CloudPage;