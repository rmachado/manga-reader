import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { amber, purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';

function App () {
  const [title, setTitle] = React.useState(null);
  
  const routeProps = { setTitle };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout title={title}>
          <Switch>
            <Route path="/" exact component={(props: any) => <HomeScreen {...props} {...routeProps} />} />
            <Route path="/explore" component={(props: any) => <ExploreScreen {...props} {...routeProps} />} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: purple,
  }
});

ReactDOM.render(<App />, document.getElementById("app"))