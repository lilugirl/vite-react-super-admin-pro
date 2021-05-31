import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import {store} from './shared/store';
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
,
  document.getElementById('root')
)
