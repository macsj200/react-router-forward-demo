import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import ForwardRoute from './components/forward-route'
import HomeScreen from './screens/home-screen'
import UsernameScreen from './screens/username-screen'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/username/:username">
          <ForwardRoute>
            <UsernameScreen />
          </ForwardRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
