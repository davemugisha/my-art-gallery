import Explore from './Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Trending from './Trending';
import Profile from './User/Profile';
import UExplore from './User/UExplore';
import Upload from './User/Upload';
import UTrending from './User/UTrending';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="Explore">
        <Switch>
          <Route exact path="/">
            <Explore />
          </Route>
          <Route exact path="/Trending">
            <Trending />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/User/UExplore">
            <UExplore />
          </Route>
          <Route exact path="/User/UTrending">
            <UTrending />
          </Route>
          <Route exact path="/User/Upload">
            <Upload />
          </Route>
          <Route exact path="/User/Profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
