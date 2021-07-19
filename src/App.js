import React from "react";

import  PostDetails  from './Pages/PostDetails';
import {Home}  from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path={"/post/:id"} component={PostDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
