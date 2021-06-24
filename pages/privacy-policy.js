import React from 'react';
import CompanyTerms from 'views/CompanyTerms';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CompanyTermsPage = () => {
  return (
    <WithLayout
      component={CompanyTerms}
      layout={Main}
    />
  )
};

export default CompanyTermsPage;
