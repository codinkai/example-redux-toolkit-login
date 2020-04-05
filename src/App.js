import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { protectedRoutes, publicRoutes } from './routes/';
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            component={route.component}
            key={idx}
          />
        ))}

        {protectedRoutes.map((route, idx) => (
          <ProtectedRoute
            path={route.path}
            component={route.component}
            key={idx}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
