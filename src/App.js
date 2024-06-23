import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import ProtectedPage from './component/ProtectedPage'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
