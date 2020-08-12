
import * as React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './client/containers/Home/Home';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../src/client/reducers';
import rootSaga from './client/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister();
