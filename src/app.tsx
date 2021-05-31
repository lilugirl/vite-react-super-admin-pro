import { Suspense,lazy } from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import ScrollToTop from './shared/components/scroll-to-top';
import Dashboard from './modules/dashboard/container';
const Docs = lazy(()=>import("./modules/docs/container"));
function App() {
  return (
    <div className="App">
      <Router>
       <ScrollToTop/>
        <Suspense fallback={<></>}>
           <Switch>
              <Route exact path="/">
                  <Dashboard/>
              </Route>
              <Route path="/docs">
                  <Docs/>
              </Route>
           </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
