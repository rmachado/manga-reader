import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { makeStyles, createStyles, Typography, Container, Paper, Grid, FormControl, InputLabel, Select,
  MenuItem, InputBase, Divider, IconButton, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { MANGA_SITES } from '../constants';
import { useMangaList } from '../hooks/mangaHooks';
import { Manga } from '../interfaces';

function ExploreScreen(props: RouteComponentProps) {
  
  const classes = useStyles();
  const { mangaList, siteId, search, onSearch, setSiteId } = useMangaList();

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
          <InputBase
            placeholder="Search"
            className={classes.input}
            value={search}
            onChange={onSearch}
          />
          <IconButton className={classes.iconButton}>
            <Search />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            { mangaList.map((manga: Manga) => (
              <Grid item xs={3} key={manga.url}>
                <Card>
                  <CardHeader title={manga.name} />
                  <CardMedia image={manga.image} title={manga.name} className={classes.media} />
                  <CardContent>
                    <Typography component="p">
                      {manga.numChapters} Chapters. ({manga.status})
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
    media: {
      height: 300,
      backgroundSize: 'contain'
      // paddingTop: '56.25%', // 16:9
    },
  }),
);

export default ExploreScreen;
