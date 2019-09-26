import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const CURRENT_YEAR = new Date().getFullYear();

const Copyright = () => (
  <div style={{ textAlign: 'center' }}>
    <Typography variant={'overline'}>{`© ${CURRENT_YEAR} with love by me`}</Typography>
  </div>
)

const SocialNetworks = () => (
  <div/>
)

const Menu = () => (
  <List>
    {['Home', 'About Me', 'Skills', 'Blog', 'Contact'].map(link => (<ListItem style={{ textTransform: 'uppercase', color: '#888' }} disableGutters>{link}</ListItem>))}
  </List>
)

const Logo = () => (
  <div style={{ textAlign: 'center', marginBottom: 60 }}>
    <Typography variant={'h4'} style={{ letterSpacing: '3px' }}>
      {'Developer'}
    </Typography>

    <Typography variant={'body1'}>
      {'Juorder Gonzalez'}
    </Typography>
  </div>
);

export const Layout = ({ children }) => (
  <Grid container={true} wrap={'nowrap'} style={{ height: '100%' }}>
    <Grid item={true} style={{ width: 330, padding: '60px 30px', flexShrink: 0, overflow: 'auto', boxShadow: '0px 0px 10px -1px silver', zIndex: 1 }}>
      <Logo />
      <Menu />
      <SocialNetworks />
      <Copyright />
    </Grid>

    <Grid item={true} xs={'auto'} style={{ width: '100%', overflow: 'auto' }}>
      {children}
    </Grid>
  </Grid>
);
