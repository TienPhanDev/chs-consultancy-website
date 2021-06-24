import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SectionAlternate } from 'components/organisms';
import {
  Features,
  Hero,
  Storage,
  Support,
} from './components';

import {
  features,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionAlternate: {
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
}));

const CloudHosting = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate>
        <Features data={features} />
      </SectionAlternate>
      <Storage id="explore"/>
      <SectionAlternate>
        <Support />
      </SectionAlternate>
    </div>
  );
};

export default CloudHosting;
