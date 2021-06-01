import { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./shared/components/scroll-to-top";
import RouterView from "./shared/router";
import routes from "./shared/config/routes";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<></>}>
          <RouterView routes={routes} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
