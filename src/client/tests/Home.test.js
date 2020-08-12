import React from 'react';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import Home from '../containers/Home/Home';
import SearchRecord from '../components/SearchRecord/SearchRecord';
import SearchResults from '../components/SearchResults/SearchResults';
import TestProvider from '../store/testProvider';
import mockData from '../store/mockData';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

describe('<Home />', () => {

    it('Home - Renders successfully without error', () => {
        const HomeComponent = render(<TestProvider store={store}><Home /></TestProvider>);
        expect(HomeComponent.container).toBeTruthy();
    });

    it('SearchBar - Renders successfully without error', () => {
        const SearchBarComponent = render(<TestProvider store={store}><SearchRecord /></TestProvider>);
        expect(SearchBarComponent.findAllByPlaceholderText('Search By Title')).toBeTruthy();
    });

    it('SearchResults - Renders successfully without error', () => {
        const SearchResultsComponent = render(<TestProvider store={store}><SearchResults listOfItems={mockData} editRecord={() => {}}/></TestProvider>);
        expect(SearchResultsComponent.container).toBeTruthy();
    });

    it('Update button rendered', () => {
        const SearchResultsComponent = render(<TestProvider store={store}><SearchResults listOfItems={mockData} editRecord={() => {}}/></TestProvider>);
        expect(SearchResultsComponent.findByText('Update')).toBeTruthy();
    });
    
});