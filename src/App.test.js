import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../src/client/reducers'
import rootSaga from '../src/client/sagas';
import App from './App';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


describe('<App />', () => {

    it('Renders App successfully without error', () => {
        const AppComponent = render(<Provider store={store}><App /></Provider>);
        expect(AppComponent.container).toBeTruthy();
    });

})