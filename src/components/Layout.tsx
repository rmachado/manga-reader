import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import Explore from '@material-ui/icons/Explore';
import Settings from '@material-ui/icons/Settings';

import Link from './Link'

const DRAWER_WIDTH = 240;

const MENU_ITEMS: (MenuItem|'---')[] = [
  { id: 'home', title: 'My Library', url: '/', icon: <LocalLibrary /> },
  { id: 'explore', title: 'Explore', url: '/explore', icon: <Explore /> },
  '---',
  { id: 'settings', title: 'Settings', url: '/settings', icon: <Settings /> },
];

interface MenuItem {
  id: string;
  title: string;
  url: string;
  icon: JSX.Element;
}

interface LayoutProps extends RouteComponentProps {
  title: string | null;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ title, location, children }) => {
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
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            { title || 'Manga Reader' }
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
                <Link key={item.id} to={item.url}>
                  <ListItem
                    button
                    selected={location.pathname === item.url}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
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
}));

export default withRouter(Layout);