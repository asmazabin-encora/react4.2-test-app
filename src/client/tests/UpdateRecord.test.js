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
          <UpdateRecord allRecords={{ id: 1, title: 'Record Title', body: 'Record Body' }} cancel={() => {}}
            updatedItems={updatedItems} />
        </TestProvider>
      );
      const editButton = getByRole('button', { name: /Update/i });
      fireEvent.click(editButton);
      expect(updatedItems).toHaveBeenCalledTimes(1);
    });

    it('title input change event', () => {
      const { getByPlaceholderText } = render(
        <TestProvider>
          <UpdateRecord allRecords={{ id: 1, title: 'Record Title', body: 'Record Body' }} cancel={() => {}}
            updatedItems={() => {}} />
        </TestProvider>
      );
      const titleInput = getByPlaceholderText('Title');
      fireEvent.change(titleInput, {
        target: { value: 'New Title' },
      });
      expect(titleInput.value).toMatch('New Title');
    });

    it('Update button click', () => {
      const updatedItems = jest.fn();
      const { getByRole } = render(
        <TestProvider>
          <UpdateRecord allRecords={{ id: 1, title: 'Record Title', body: 'Record Body' }} cancel={() => {}}
            updatedItems={updatedItems} />
        </TestProvider>
      );
      const editButton = getByRole('button', { name: /UPDATE/i });
      fireEvent.click(editButton);
      expect(updatedItems).toHaveBeenCalledTimes(1);
    });
});