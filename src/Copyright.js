import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Copyright() {
  return (
    <Box p={2}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        onigiri ltd.
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'. data from '}
      <MuiLink color="inherit" href="https://animeflix.io/">
        animeflix
      </MuiLink>{'.'}
    </Typography>
      </Box>
  );
}