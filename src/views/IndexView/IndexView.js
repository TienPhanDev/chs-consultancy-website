import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Community, QuickStart, Hero } from './components';

const gallery = [
  {
    image: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 2,
  },
  {
    image: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
];

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <Section narrow>
        <Community data={gallery} />
      </Section>
    </div>
  );
};

export default IndexView;
