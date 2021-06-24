import React from 'react';
import Enterprise from 'views/Enterprise';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const BusinessPage = () => {
  return (
    <WithLayout
      component={Enterprise}
      layout={Main}
    />
  )
};

export default BusinessPage;