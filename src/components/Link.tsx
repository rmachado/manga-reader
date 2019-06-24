import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, styled, Theme } from '@material-ui/core/styles';

const StyledLink = (props: any) => {
  const classes = useStyles()

  return (
    <Link {...props} className={classes.link} />
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}))

export default StyledLink;
