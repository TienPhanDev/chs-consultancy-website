import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 470,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  section: {
    paddingTop: 3,
    paddingBottom: 0,
  },
  sectionHeader: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      width: 'calc(100vw - 625px)',
    },
  },
  image: {
    alignSelf: 'flex-end',
    maxWidth: 625,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 'auto',
      transform: 'translateY(-50%) !important',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.hero}>
        <Section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h6" gutterBottom>
            Increase IT Efficiency and Get More Done
            </Typography>
            <SectionHeader
              titleVariant="h3"
              title={
                <span>
                  Designed secure.
                  <br />
                  Built for anything.
                </span>
              }
              subtitle={
                <span>
                  Forward thinking businesses use our cloud backup service to
                  ensure data reliability and safety.
                </span>
              }
              ctaGroup={[
                <Button variant="contained" color="primary" size="large" href="/cloud-services#explore">
                  Explore
                </Button>,
              ]}
              align="left"
              data-aos="fade-up"
            />
          </div>
        </Section>
        <Image
          src="https://assets.maccarianagency.com/the-front/illustrations/progressive-app.svg"
          className={classes.image}
          data-aos="fade-up"
          lazy={false}
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;