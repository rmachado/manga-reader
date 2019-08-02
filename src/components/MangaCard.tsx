import * as React from 'react';
import { makeStyles, createStyles, Card, CardMedia, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Manga } from '../interfaces';

interface MangaCardProps {
  manga: Manga;
}

function MangaCard({ manga }: MangaCardProps) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image={manga.image}
        // height="400"
        title={manga.name}
        // className={classes.media}
      />
      <div className={classes.overlay}>
        <CardHeader title={manga.name} />
        <CardContent>
          <Typography component="p">
            {manga.numChapters} Chapters. ({manga.status})
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

const useStyles = makeStyles(
  createStyles({
    card: {
      cursor: 'pointer',
      height: 400,
      overflow: 'hidden',
      position: 'relative'
    },
    media: {
      height: 0,
      // overflow: 'hidden',
      paddingTop: '56.25%', // 16:9
    },
    image: {
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      bottom: '0px',
      color: 'black',
      backgroundColor: 'white',
      opacity: 0.7,
      width: '100%'
    }
  }),
);

export default MangaCard;
