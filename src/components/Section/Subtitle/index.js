import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';

export const Subtitle = ({ label }) => {
  const classes = useStyles();
  return (
    <Typography variant={'h5'} classes={classes}>
      {label}
    </Typography>
  );
};
