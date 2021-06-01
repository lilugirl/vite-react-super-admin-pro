import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import globalStore from './shared/store';
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={globalStore}  >
    <App />
  </Provider>
,
  document.getElementById('root')
)
