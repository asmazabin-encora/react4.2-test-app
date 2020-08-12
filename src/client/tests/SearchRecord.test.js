import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchRecord from '../components/SearchRecord/SearchRecord';

describe('<SearchRecord />', () => {

    it('Renders successfully', () => {
        const component = render(<SearchRecord />);
        expect(component.queryByPlaceholderText('Search By Title')).toBeTruthy();
    });


    it('SearchBar - Input ', () => {
        const { getByRole } = render(
            <SearchRecord />
        );
        const editInput = getByRole('Input');
        expect(editInput.value).toBeTruthy();
        fireEvent.change(editInput, {
          target: { value: 'New Post Title' }
        });
    });
});
