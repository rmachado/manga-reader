import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, LocationProvider, createHistory, createMemorySource } from '@reach/router';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, colors } from '@material-ui/core';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import SettingsScreen from './screens/SettingsScreen';

function App () {
  const source = createMemorySource('/explore');
  const history = createHistory(source);

  return (
    <ThemeProvider theme={theme}>
      <LocationProvider history={history}>
        <Router>
          <Layout path="/">
            <HomeScreen path="/" />
            <ExploreScreen path="/explore" />
            <SettingsScreen path="/settings" />
          </Layout>
        </Router>
      </LocationProvider>
    </ThemeProvider>
  )
}

const theme = createMuiTheme({
  palette: {
    primary: colors.amber,
    secondary: colors.purple,
  }
});

ReactDOM.render(<App />, document.getElementById("app"))