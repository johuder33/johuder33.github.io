import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { useStyles } from './style';

export const Section = ({ children, title, subtitle }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Grid container={true}>
        {(title || subtitle) && (
          <Grid item={true} xs={12} classes={{ item: classes.item }}>
            {title && <Title label={title} />}
            {subtitle && <Subtitle label={subtitle} />}
          </Grid>
        )}
        <Grid item={true} xs={12}>{children}</Grid>
      </Grid>
    </section>
  );
}
