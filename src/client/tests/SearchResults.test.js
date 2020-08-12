import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchResults from '../components/SearchResults/SearchResults';
import TestProvider from '../store/testProvider';
import mockData from '../store/mockData';

describe('<SearchResults />', () => {

    it('Renders successfully without error', () => {
      const post = render(
        <TestProvider>
          <SearchResults listOfItems={mockData} editRecord={() => {}} />
        </TestProvider>
      );
      expect(post.container).toBeTruthy();
    });

});