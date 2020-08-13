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

    it('Update Button click successfully without error', () => {
      const editRecord = jest.fn();
      const { getByRole } = render(
        <TestProvider>
          <SearchResults listOfItems={[{ id: 1, title: 'Record Title', body: 'Record Body' }]} editRecord={editRecord} />
        </TestProvider>
      );
      const updateButton = getByRole('button', { name: /Update/i });
      fireEvent.click(updateButton);
      expect(editRecord).toHaveBeenCalledTimes(1);
    });

});