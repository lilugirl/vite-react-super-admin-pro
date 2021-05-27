import React, { Suspense } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import ScrollToTop from './shared/components/scroll-to-top';

function App() {
  return (
    <div className="App">
      <Router>
       <ScrollToTop/>
        <Suspense fallback={<></>}>
            app
        </Suspense>
      </Router>
    </div>
  )
}

export default App
