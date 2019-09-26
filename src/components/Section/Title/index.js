import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';

export const Title = ({ label }) => {
  const classes = useStyles();
  return (
    <Typography variant={'overline'} component={'h1'} classes={classes}>
      {label}
    </Typography>
  );
};
