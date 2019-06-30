// import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as React from 'react';
import { Match, Link, RouteComponentProps } from '@reach/router';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, LocalLibrary, Explore, Settings } from '@material-ui/icons';

const DRAWER_WIDTH = 240;

const MENU_ITEMS: (MenuItem|'---')[] = [
  { id: 'home', title: 'My Library', url: '/main_window', icon: <LocalLibrary /> },
  { id: 'explore', title: 'Explore', url: '/main_window/explore', icon: <Explore /> },
  '---',
  { id: 'settings', title: 'Settings', url: '/settings', icon: <Settings /> },
];

interface MenuItem {
  id: string;
  title: string;
  url: string;
  icon: JSX.Element;
}

const Layout: React.FunctionComponent<RouteComponentProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
          >
            <Menu />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Manga Reader
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }} 
      >
        <div className={classes.toolbar} />
        <List>
          { MENU_ITEMS.map((item, idx) => {
            if (item === '---') {
              return <Divider key={`divider-${idx}`} />;
            } else {
              return (
                <Link key={item.id} to={item.url} className={classes.link}>
                  <Match path={item.url}>
                    {({ match }) => (
                      <ListItem
                        button
                        selected={!!match}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    )}
                  </Match>
                </Link>
              )
            }
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { children }
      </main>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}));

export default Layout;