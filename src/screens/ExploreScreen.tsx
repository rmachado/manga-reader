import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, createStyles, Typography, Container, Paper, Grid, FormControl, InputLabel, Select,
  MenuItem, InputBase, Divider, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const MANGA_SITES = [
  { id: 'mangareader', title: 'Manga Reader' },
  { id: 'mangapanda', title: 'Manga Panda' },
];

function ExploreScreen(props: RouteComponentProps) {
  const [siteId, setSiteId] = React.useState(MANGA_SITES[0].id);
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4">Explore Manga</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputLabel htmlFor="site">Site</InputLabel>
          <Select
            value={siteId}
            onChange={(e) => setSiteId(e.target.value as string)}
            inputProps={{
              name: 'site',
              id: 'manga-site',
            }}
          >
            { MANGA_SITES.map((site) =>
              <MenuItem key={site.id} value={site.id}>{site.title}</MenuItem>
            )}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputBase placeholder="Search" className={classes.input} />
          <IconButton className={classes.iconButton}>
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const useStyles = makeStyles(
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  }),
);

export default ExploreScreen;
