import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, colors } from '@material-ui/core';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router basepath="/main_window">
        <Layout path="/">
          <HomeScreen path="/" />
          <ExploreScreen path="/explore" />
        </Layout>
      </Router>
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