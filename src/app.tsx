import { Suspense,lazy } from 'react';
import {HashRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import ScrollToTop from './shared/components/scroll-to-top';
import Dashboard from './modules/dashboard';
import Login from './modules/login';
import NotFound from './modules/dashboard/exceptions/404';
const Docs = lazy(()=>import("./modules/docs"));
function App() {
  return (
    <div className="App">
      <Router>
       <ScrollToTop/>
        <Suspense fallback={<></>}>
           <Switch>
              <Redirect exact from="/" to="/dashboard">
              </Redirect>
     
              <Route  path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/docs">
                  <Docs/>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route>
                <NotFound/>
              </Route>
           </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
