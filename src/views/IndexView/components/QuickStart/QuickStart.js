import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, NoSsr, Grid, Button, useMediaQuery, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const useStyles = makeStyles(theme => ({
  quickStartSection: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1/2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const docsButton = (
    <Button size="large" variant="outlined" color="primary" component="a" href="/reviews">
      See reviews
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      view all services 
    </Button>
  );

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6} data-aos={'fade-right'}>
              <SectionHeader
                title="Less stopping. More doing"
                subtitle="At Charleston IT Solutions, we will give you the best Cloud Service you can have at a cost-effective that will increase your business performance and flexibility."
                ctaGroup={[docsButton, buyButton]}
                align={isMd ? 'left' : 'center'}
                disableGutter
                titleVariant="h4"
                titleProps={{ className: classes.fontWeightBold }}
                className={classes.quickStartSection}
              />
            </Grid>
            <Grid item container alignItems="center" xs={12} md={6} data-aos={'fade-left'}>
              <NoSsr>
                <SyntaxHighlighter language="javascript" style={vs2015} className={classes.editor}>
                  {`
> $ npm install

// Everything installed!


> $ npm start

// LiveReload started. Opening localhost:3000
                `}
                </SyntaxHighlighter>
              </NoSsr>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2} direction={isMd ? 'row': 'column-reverse'}>
            <Grid item xs={12} container alignItems="center" md={6} data-aos={'fade-right'}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>100+ clients</Typography>
                  <Typography color="textPrimary" variant="body1">
                    Our clientele consists of over 100+ clients; we are rich in experience.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>10+ utility tools</Typography>
                  <Typography color="textPrimary" variant="body1">
                    Our webstore offers 10 + fully customizable business applications designed for you needs.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>15+ years</Typography>
                  <Typography color="textPrimary" variant="body1">
                    We have over 15 + years of experience helping folks with technology issues
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>99% satisfaction</Typography>
                  <Typography color="textPrimary" variant="body1">
                    99% of our customers rated us 5-stars over the past decade..
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos={'fade-left'}>
              <SectionHeader
                title="The powerful and flexible services for all kinds of businesses"
                subtitle="Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or simply a business page, we can help you create the best possible product for your users."
                align="left"
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
