import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestProvider from '../store/testProvider'
import UpdateRecord from '../components/UpdateRecord/UpdateRecord';
import mockData from '../store/mockData';

describe('UpdateRecord Modal', () => {

    it('Renders successfully without error', () => {
      const post = render(
        <TestProvider>
          <UpdateRecord allRecords={mockData} cancel={() => {}}
            updatedItems={() => {}} />
        </TestProvider>
      );
      expect(post.container).toBeTruthy();
    });

    it('Update button clicked', () => {
      const updatedItems = jest.fn();
      const { getByRole } = render(
        <TestProvider>
          <UpdateRecord allRecords={mockData} cancel={() => {}}
            updatedItems={updatedItems} />
        </TestProvider>
      );
      const editButton = getByRole('Button', { name: /Update/i });
      fireEvent.click(editButton);
      expect(updatedItems).toHaveBeenCalledTimes(1);
    });

});