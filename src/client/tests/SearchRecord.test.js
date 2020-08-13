import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchRecord from '../components/SearchRecord/SearchRecord';
import mockData from '../store/mockData';

describe('<SearchRecord />', () => {

    it('Renders successfully', () => {
        const component = render(<SearchRecord />);
        expect(component.queryByPlaceholderText('Search By Title')).toBeTruthy();
    });


    it('SearchBar - Input change event ', () => {
        const { getByRole } = render(
            <SearchRecord searchItem={mockData} allItems={() => {}} />
        );
        const editInput = getByRole('textbox');
        expect(editInput.value).toMatch('');
        fireEvent.change(editInput, {
          target: { value: 'New Record Title' }
        });
        expect(editInput.value).toMatch('New Record Title');
    });
});
